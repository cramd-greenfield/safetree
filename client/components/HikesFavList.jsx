import React from 'react';

import Hike from './Hike.jsx';

const HikesFavList = () => {

  return (
    <div className="fav-hike-list">
      <ul className="fav-hikes">
        <Hike />
        <Hike />
        <Hike />
      </ul>
    </div>
  )
}

export default HikesFavList;