import React from 'react';
import Header from './components/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import Login from './pages/Login';

export default function App() {
  const navigate = useNavigate();
  const { user, logout, logIn, signUp } = useAuthContext();

  const onAllDweets = () => {
    navigate('/');
  };

  const onMyDweets = () => {
    navigate(`/${user.username}`);
  };

  const onLogin = (username, password) => {
    logIn(username, password);
  };

  const onSignUp = (username, password, name, email, url) => {
    signUp(username, password, name, email, url);
  };

  const onLogout = () => {
    if (window.confirm('Do you want to log out?')) {
      logout();
      navigate('/');
    }
  };
  return (
    <div className='app'>
      <Header
        user={user}
        onAllDweets={onAllDweets}
        onMyDweets={onMyDweets}
        onLogout={onLogout}
      />
      {user ? <Outlet /> : <Login onSignUp={onSignUp} onLogin={onLogin} />}
    </div>
  );
}
