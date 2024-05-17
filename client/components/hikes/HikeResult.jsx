import React from 'react';
import axios from 'axios';

const HikeResult = ({ hike, getFavHikes }) => {

  const { description, location, rating } = hike;

  const addFavHike = () => {

    // post to the db
    axios.post('/hikes', {
      hike: {
        description,
        location,
        rating,
      }
    })
      .then(() => {
        getFavHikes();
      })
      .catch(() => {
        console.error('Failed to add favorite hike', err);
      });
  }

  return (
    <div>
      <button onClick={ addFavHike } type="button">Favorite</button> {/** somehow associate hike object with this button */}
      <span>{ description }</span>
      <span>{ location }</span>
      <span>{ rating }</span>
    </div>
  )
}

export default HikeResult;