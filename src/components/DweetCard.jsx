import React, { useState } from 'react';
import EditDweetForm from './EditDweetForm';
import Avatar from './Avatar';
import parseDate from '../util/date.js';

export default function DweetCard({
  dweet,
  owner,
  onDelete,
  onUpdate,
  onUsernameClick,
}) {
  const { id, username, name, url, text, createdAt } = dweet;
  const [editing, setEditing] = useState(false);
  const onClose = () => setEditing(false);
  return (
    <li className='tweet'>
      <section className='tweet-container'>
        <Avatar url={url} name={name} />
        <div className='tweet-body'>
          <span className='tweet-name'>{name}</span>
          <span
            className='tweet-username'
            onClick={() => onUsernameClick(dweet)}
          >
            @{username}
          </span>
          <span className='tweet-date'> · {parseDate(createdAt)}</span>
          <p>{text}</p>
          {editing && (
            <EditDweetForm
              tweet={dweet}
              onUpdate={onUpdate}
              onClose={onClose}
            />
          )}
        </div>
      </section>
      {owner && (
        <div className='tweet-action'>
          <button className='tweet-action-btn' onClick={() => onDelete(id)}>
            x
          </button>
          <button className='tweet-action-btn' onClick={() => setEditing(true)}>
            ✎
          </button>
        </div>
      )}
    </li>
  );
}
