import React from 'react';

export default function Header({ user, onLogout, onAllDweets, onMyDweets }) {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./img/logo.png' alt='Dwitter Logo' className='logo-img' />
        <h1 className='logo-name'>Dwitter</h1>
        {user && <span className='logo-user'>@{user.username}</span>}
      </div>
      {user && (
        <nav className='menu'>
          <button onClick={() => onAllDweets()}>All Tweets</button>
          <button onClick={() => onMyDweets()}>My Tweets</button>
          <button className='menu-item' onClick={onLogout}>
            Logout
          </button>
        </nav>
      )}
    </header>
  );
}
