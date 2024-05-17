import React, { useState } from 'react';
import axios from 'axios';

import HikeResults from './HikeResults.jsx';

const HikeSearch = () => {

  const [input, setInput] = useState('');
  const [results, loadResults] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const searchHikes = () => {
    console.log('hike searched', input);

    axios.post('/hikes', {
      search: {
        location: input,
      }
    })
      .then((hikeResults) => {
        console.log('results from axios post ', hikeResults.data);
        loadResults(hikeResults.data);
      })
      .catch((err) => {
        console.error('Failed to send post req to server', err);
      })
  }

  return (
    <div className="hike-search">
      <input value={ input } onChange={ handleInput } type="text" placeholder="city, state, or zip code"/>
      <button onClick={ searchHikes }>Search</button>
      <HikeResults results={ results }/>
    </div>
  )
}

export default HikeSearch;