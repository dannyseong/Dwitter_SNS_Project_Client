import React, { useState } from 'react';
import { useDweetApi } from '../context/DweetContext';

export default function NewDweetForm({ onError, onCreated }) {
  const { dweetApi } = useDweetApi();
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    dweetApi
      .postDweet(text)
      .then((created) => {
        setText('');
        onCreated(created);
      })
      .catch(onError);
  };

  const onChage = (e) => {
    setText(e.target.value);
  };
  return (
    <form className='tweet-form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Edit your dweet'
        value={text}
        required
        autoFocus
        onChange={onChage}
        className='form-input tweet-input'
      />
      <button type='submit' className='form-btn'>
        Post
      </button>
    </form>
  );
}
