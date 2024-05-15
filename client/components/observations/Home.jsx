import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import logo from '../style/Logo.png';

const Home = () => {
  const [feed, setFeed] = useState([]);
  const [activity, setActivity] = useState('');
  const [observation, setObservation] = useState('');

  //get all observations for the feed
  // useEffect(() => {
  //   axios(`/feed`)
  //     .then(({ data }) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.error('Could not get Feed:', err));
  // });

  return (
    <div>
      <h2 className='logo'>{/* <img src={logo} alt='Safe-Tree-Logo' /> */}</h2>
      <h1>Feed</h1>
      <textarea cols={50} rows={5}></textarea>
    </div>
  );
};

export default Home;
