import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../Components/LoginSignup/Login'
import Signup from '../../Components/LoginSignup/Signup'
import Player from '../../Components/LoginSignup/Player'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    // loader:
    children: [
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/player',
        element: <Player />
      }
    ]
  },
])

export default routes;