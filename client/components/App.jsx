import React from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';
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
