import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../Components/LoginSignup/Login'
import Signup from '../../Components/LoginSignup/Signup'
import Player from '../../Components/LoginSignup/Player'
import Signer from '../../Components/LoginSignup/Signer'
import Logger from '../../Components/LoginSignup/Logger'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Logger />,
    // loader:
    children: [
      {
        path: '/signup',
        element: <Signer />
      },
      {
        path: '/player',
        element: <Player />
      }
    ]
  },
])

export default routes;