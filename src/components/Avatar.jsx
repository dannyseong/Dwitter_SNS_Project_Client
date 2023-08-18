import React from 'react';

export default function Avatar({ url, name }) {
  return (
    <div>
      {!!url ? (
        <img src={url} alt='avatar' className='avatar-img' />
      ) : (
        <div className='avatar-txt'>{name.charAt(0)}</div>
      )}
    </div>
  );
}
