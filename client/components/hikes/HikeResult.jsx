import React from 'react';

const HikeResult = ({ hike, getFavHikes }) => {

  const addFavHike = (e) => {
    console.log(e);
    // getFavHikes()
  }

  return (
    <div>
      <button onClick={ addFavHike } type="button">Favorite</button> {/** somehow associate hike object with this button */}
      <span>{ hike.description }</span>
      <span>{ hike.location }</span>
      <span>{ hike.rating }</span>
    </div>
  )
}

export default HikeResult;