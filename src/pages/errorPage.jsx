import React from 'react';
import { useRouteError } from 'react-router';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </>
  );
}
