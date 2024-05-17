import React from 'react';

const HikeFav = ({ favHike, getFavHikes }) => {

  const removeFavHike = (e) => {
    console.log(e);
    // getFavHikes()
  }

  const rateFavHike = (e) => {
    console.log(e);
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