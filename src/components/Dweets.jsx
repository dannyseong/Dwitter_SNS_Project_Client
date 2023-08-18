import React, { useEffect, useState } from 'react';
import DweetCard from './DweetCard';
import NewDweetForm from './NewDweetForm';
import { useDweetApi } from '../context/DweetContext';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';

export default function Tweets({ username }) {
  const navigate = useNavigate();
  const { dweetApi } = useDweetApi();
  const [dweets, setDweets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    dweetApi
      .getDweets(username)
      .then((dweets) => setDweets([...dweets]))
      .catch(onError);
  }, [username]);

  const onCreated = (dweet) => {
    setDweets((dweets) => [dweet, ...dweets]);
  };

  const onDelete = (dweetId) => {
    dweetApi
      .deleteDweet(dweetId)
      .then(() => {
        setDweets((dweets) => dweets.filter((dweet) => dweet.id !== dweetId));
      })
      .catch((error) => setError(error.toString()));
  };

  const onUpdate = (dweetId, text) => {
    dweetApi
      .updateDweet(dweetId, text)
      .then((updated) =>
        setDweets((dweets) =>
          dweets.map((item) => (item.id === updated.id ? updated : item))
        )
      );
  };

  const onUsernameClick = (dweet) => navigate(`/${dweet.username}`);

  const onError = (error) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };
  return (
    <>
      <NewDweetForm onError={onError} onCreated={onCreated} />
      {error && <Banner text={error} isAlert={true} transient={true} />}
      <ul className='tweets'>
        {dweets.map((dweet) => (
          <DweetCard
            key={dweet.id}
            dweet={dweet}
            owner={dweet.username === username}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onUsernameClick={onUsernameClick}
          />
        ))}
      </ul>
    </>
  );
}
