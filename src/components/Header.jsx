import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./img/logo.png' alt='Dwitter Logo' className='logo-img' />
        <h1 className='logo-name'>Dwitter</h1>
        <span className='logo-user'>@username</span>
      </div>
      <nav className='menu'>
        <button>All Tweets</button>
        <button>My Tweets</button>
        <button className='menu-item'>Logout</button>
      </nav>
    </header>
  );
}
