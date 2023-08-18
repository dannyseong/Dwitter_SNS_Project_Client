import React, { useState } from 'react';
import { useDweetApi } from '../context/DweetContext';

export default function NewDweetForm() {
  const { dweetApi } = useDweetApi();
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    dweetApi.postDweet();
    //add post function
    setText('');
  };

  const onChage = (e) => {
    setText(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Edit your dweet'
        value={text}
        required
        autoFocus
        onChange={onChage}
      />
      <button>Post</button>
    </form>
  );
}
