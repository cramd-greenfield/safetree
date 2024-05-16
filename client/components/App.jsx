import React from 'react';
import Home from './observations/Home.jsx';
import Login from './observations/Login.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
