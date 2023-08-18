import React from 'react';
import { Outlet } from 'react-router';

export default function AllTweets() {
  return (
    <>
      {/* all the other elements */}
      Main Page
      <div>
        <Outlet />
      </div>
    </>
  );
}
