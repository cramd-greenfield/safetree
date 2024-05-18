import React from 'react';
import axios from 'axios';

const HikeFav = ({ favHike, getFavHikes }) => {

  const { description } = favHike;

  const removeFavHike = () => {

    // delete req to the db
    axios.delete('/hikes', {
      data: {
        description,
      }
    })
      .then(() => {
        getFavHikes();
      })
      .catch((err) => {
        console.error('Failed to remove favorite hike', err);
      })

  }

  const rateFavHike = (e) => {
    console.log(e);
    // patch req to the db

    // getFavHikes()
  }

  return (
    <div>
      <button onClick={ removeFavHike } type="button">Remove</button>
      <button onClick={ rateFavHike } type="button">Rate</button>
      <span>{ favHike.description }</span>
      <span>{ favHike.location }</span>
      <span>{ favHike.rating }</span>
    </div>
  )
}

export default HikeFav;