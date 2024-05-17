import React from 'react';

const HikeResult = ({ hike }) => {

  return (
    <div>
      <button>Add Favorite</button>
      <button>Remove</button>
      <span>{ hike.description }</span>
      <span>{ hike.location }</span>
      <span>{ hike.rating }</span>
    </div>
  )
}

export default HikeResult;