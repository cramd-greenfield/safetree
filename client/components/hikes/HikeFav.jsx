import React, { useState } from 'react';
import axios from 'axios';

const HikeFav = ({ favHike, getFavHikes }) => {

  const [newRating, setNewRating] = useState('');

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

  const handleNewRating = (e) => {
    setNewRating(e.target.value);
    console.log(e.target.value);
  }

  const rateFavHike = () => {

    // patch req to the db
    axios.patch('/hikes', {
      hike: {
        description,
        rating: newRating,
      }
    })
      .then(() => {
        getFavHikes();
      })
      .then(() => { setNewRating('') })
      .catch(() => {
        console.error('Failed to change rating', err);
      })
  }

  return (
    <div>
      <ul>
        <li>Name:  { favHike.description }</li>
        <li>Location:  { favHike.location }</li>
        <li>Rating:  { favHike.rating }</li>
      </ul>
      <input value={ newRating } onChange={ handleNewRating } type="text" placeholder="up to 5" />
      <button onClick={ rateFavHike } type="button">Rate</button>
      <button onClick={ removeFavHike } type="button">Remove</button>
    </div>
  )
}

export default HikeFav;