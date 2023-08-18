import React from 'react';
import Header from './components/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { DweetApiProvider } from './context/DweetContext';

export default function App() {
  const navigate = useNavigate();

  const onAllDweets = () => {
    navigate('/');
  };

  const onMyDweets = () => {
    navigate(`/danny`);
  };

  return (
    <div className='app'>
      <Header onAllDweets={onAllDweets} onMyDweets={onMyDweets} />
      <DweetApiProvider>
        <Outlet />
      </DweetApiProvider>
    </div>
  );
}
