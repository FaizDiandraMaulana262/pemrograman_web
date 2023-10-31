import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Login from './pages/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
  {
    path: "landing",
    element: <Landing/>
  },
  {
    path: "login",
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
