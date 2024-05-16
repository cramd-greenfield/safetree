import React from 'react';
import Home from './observations/Home.jsx';
import Login from './observations/Login.jsx';
import Profile from './Profile.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
