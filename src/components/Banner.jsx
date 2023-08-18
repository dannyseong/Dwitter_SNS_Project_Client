import React from 'react';

export default function Banner({ text, isAlert }) {
  return (
    <>
      {text && (
        <p className={`banner ${isAlert ? 'banner-red' : 'banner-green'}`}>
          {text}
        </p>
      )}
    </>
  );
}
