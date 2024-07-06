import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Components/LoginSignup/LoginSignup.css';
import AuthForm from './Components/LoginSignup/Authform';
import Logger from './Components/LoginSignup/Logger';
import Signer from './Components/LoginSignup/Signer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logger />} />
        <Route path="/signup" element={<Signer />} />
        <Route path="/login" element={<AuthForm action="Login" />} />
      </Routes>
    </Router>
  );
}

export default App;
