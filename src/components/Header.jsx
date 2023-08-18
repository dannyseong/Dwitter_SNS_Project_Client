import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Header({ onAllDweets, onMyDweets }) {
  const user = useParams();
  console.log(user);
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./img/logo.png' alt='Dwitter Logo' className='logo-img' />
        <h1 className='logo-name'>Dwitter</h1>
        {user && <span className='logo-user'>@{user.username}</span>}
      </div>
      <nav className='menu'>
        <button onClick={() => onAllDweets()}>All Tweets</button>

        <button onClick={() => onMyDweets()}>My Tweets</button>

        <Link>
          <button className='menu-item'>Logout</button>
        </Link>
      </nav>
    </header>
  );
}
