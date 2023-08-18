import React, { useState } from 'react';
import DweetCard from './DweetCard';
import NewDweetForm from './NewDweetForm';

export default function Tweets() {
  const [dweets, setDweets] = useState([{}, {}, {}]);
  const [error, setError] = useState('');

  const onCreated = (dweet) => {
    setDweets((dweets) => [dweet, ...dweets]);
  };

  const onError = (error) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };
  return (
    <>
      <NewDweetForm onError={onError} onCreated={onCreated} />
      <ul>
        {dweets.map((dweet) => (
          <DweetCard />
        ))}
      </ul>
    </>
  );
}
