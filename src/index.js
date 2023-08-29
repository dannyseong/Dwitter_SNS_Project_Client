import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/errorPage';
import MyTweets from './pages/MyTweets';
import App from './App';
import AllTweets from './pages/AllTweets';
import { AuthApiProvider, AuthErrorEventBus } from './context/AuthContext';
import AuthService from './service/auth';
import DweetService from './service/dweet';
import { HttpClient } from './network/http';
import { DweetApiProvider } from './context/DweetContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AllTweets /> },
      { path: '/', element: <AllTweets /> },
      { path: '/:username', element: <MyTweets /> },
    ],
  },
]);
const http = new HttpClient(process.env.REACT_APP_BASE_URL);
const dweetService = new DweetService(http);
const authService = new AuthService(http);
const authErrorEventBus = new AuthErrorEventBus();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthApiProvider
      authService={authService}
      authErrorEventBus={authErrorEventBus}
    >
      <DweetApiProvider dweetService={dweetService}>
        <RouterProvider router={router} />
      </DweetApiProvider>
    </AuthApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
