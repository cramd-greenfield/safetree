import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Profile from './Nav.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
