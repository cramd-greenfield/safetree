import React, { useState } from 'react';
import axios from 'axios';
// require('dotenv').config();
// const { GOOGLE_MAPS_API_KEY } = process.env;

const HikeSearch = () => {

  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const searchHikes = () => {
    console.log('hike searched');
    console.log(input);

    axios.post('/hikes', {
      search: {
        location: input,
      }
    })
      .then((data) => {
        console.log('results from axios post ', data);
      })
      .catch((err) => {
        console.error('Failed to send post req to server', err);
      })
  }

  return (
    <div className="hike-search">
      <input value={ input } onChange={ handleInput } type="text" placeholder="city, state, or zip code"/>
      <button onClick={ searchHikes }>Search</button>
    </div>
  )
}

export default HikeSearch;