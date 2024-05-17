import React from 'react';

const HikeResult = ({ result }) => {
  console.log('passed into HikeResult', result)
  return (
    <div>
      <button>Add Favorite</button>
      <button>Remove</button>
      <span>{ description }</span>
      <span>{ location }</span>
    </div>
  )
}

export default HikeResult;