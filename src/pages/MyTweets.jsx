import React from 'react';
import Dweets from '../components/Dweets';
import { useParams } from 'react-router-dom';

export default function MyTweets({ dweetService }) {
  const { username } = useParams();
  return (
    <>
      <Dweets username={username} />
    </>
  );
}
