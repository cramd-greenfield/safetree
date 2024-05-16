import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../style/logo.png';

const Home = () => {
  return (
    <div>
      <div className='header'>
        <h1 className='title'>SafeTree</h1>

        <img className='logo' src={logo} />
        <div className='navbar'>
          <div className='features'>
            <>
              <Link to='/profile'>
                <button type='submit'>Profile</button>
              </Link>
              <Link to='/wildlife'>
                <button type='submit'>WildLife Info</button>
              </Link>
              <Link to='/plants'>
                <button type='submit'>Plant Info</button>
              </Link>
              <Link to='/hikes'>
                <button type='submit'>Hike Info</button>
              </Link>
              <Link to='/calender'>
                <button type='submit'>Planning</button>
              </Link>
            </>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>bottom of page things go here</p>
      </div>
    </div>
  );
};

export default Home;
