import React from 'react';

import HikeResult from './HikeResult.jsx';

const HikesFavList = () => {

  return (
    <div className="fav-hike-list">
      <ul className="fav-hikes">
        <HikeResult />
        <HikeResult />
        <HikeResult />
      </ul>
    </div>
  )
}

export default HikesFavList;