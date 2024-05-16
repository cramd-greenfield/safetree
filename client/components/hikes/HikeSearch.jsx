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

    axios.post('https://places.googleapis.com/v1/places:searchText', {
      params: {
        fields: 'places.id,places.displayName,places.location,places.primaryTypeDisplayName,places.rating,places.formattedAddress',
        textQuery: `hikes near ${input}`,
        key: GOOGLE_MAPS_API_KEY,
        maxResultCount: 5,
        rankPreference: 'DISTANCE',
      }
    })
      .then((data) => {
        console.log('results from google: ', data);
      })
      .catch((err) => {
        console.error('Failed to fetch results from Google Maps', err);
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