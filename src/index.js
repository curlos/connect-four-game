import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainMenu from './pages/MainMenu'
import Rules from './pages/Rules';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
