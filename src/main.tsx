import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import Register from './pages/register.tsx';
import Forgot from './pages/forgot.tsx';
import Eat from './pages/eat.tsx';
import Profile from './pages/profile.tsx';
import AccountSettings from './pages/accountsettings.tsx';
import Users from './pages/users.tsx';
import AddUser from './pages/adduser.tsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { path: "*", element: <Navigate to="/login" replace /> },
    { path: '/login', element: <Login /> },
    {
      path: '/', element: <Home />, children: [
        { path: '/eat', element: <Eat /> },
        { path: '/users', element: <Users />},
        { path: '/adduser', element: <AddUser /> },
        { path: '/register', element: <Register /> },
        { path: '/forgot', element: <Forgot /> },
        { path: '/profile', element: <Profile /> },
        { path: '/accountsettings', element: <AccountSettings /> },
      ]
    },

  ]
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
