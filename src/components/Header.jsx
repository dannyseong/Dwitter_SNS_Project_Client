import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./img/logo.png' alt='Dwitter Logo' className='logo-img' />
        <h1>Dwitter</h1>
        {/* {username && <span>@{username}</span>} */}
      </div>
      <nav>
        <button>All Tweets</button>
        <button>My Tweets</button>
        <button>Logout</button>
      </nav>
    </header>
  );
}
