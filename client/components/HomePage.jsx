import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [feed, setFeed] = useState([]);
  const [activity, setActivity] = useState('');
  const [observation, setObservation] = useState('');

  //get all observations for the feed
  useEffect(() => {
    axios(`/feed`)
      .then(({ data }) => {
        setJournals(data);
      })
      .catch((err) => console.error('Could not get Feed:', err));
  });

  return (
    <div>
      <h1>Activity</h1>
    </div>
  );
};

export default HomePage;
