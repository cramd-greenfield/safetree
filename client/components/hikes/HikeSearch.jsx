import React, { useState } from 'react';
import axios from 'axios';

import HikeResults from './HikeResults.jsx';
import HikeFavList from './HikeFavList.jsx';

const HikeSearch = () => {

  const [input, setInput] = useState('');
  const [results, loadResults] = useState([]);
  const [favHikes, setFavHikes] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const searchHikes = () => {

    axios.post('/hikeSearch', {
      search: {
        location: input,
      }
    })
      .then((hikeResults) => {
        loadResults(hikeResults.data);
      })
      .catch((err) => {
        console.error('Failed to send post req to server', err);
      })
  }

  const getFavHikes = () => {
    axios.get('/hikes')
      .then(({ data }) => {
        setFavHikes(data);
      })
      .catch((err) => {
        console.error('Failed to get favorite hikes', err)
      })
  }
  getFavHikes();

  return (
    <div className="hike-search">
      <div className="hike-search-form">
        <input value={ input } onChange={ handleInput } type="text" placeholder="city, state, or zip code"/>
        <button onClick={ searchHikes } type="button">Search</button>
      </div>

      <div className="hike-search-results">
        <h4>Nearby Results</h4>
        <HikeResults results={ results } getFavHikes={ getFavHikes }/>
      </div>

      <div className="hike-favs">
        <h4>Favorite Trails</h4>
        <HikeFavList favHikes={ favHikes } getFavHikes={ getFavHikes }/>
      </div>
    </div>
  )
}

export default HikeSearch;