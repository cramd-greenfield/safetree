import React from 'react';

import HikeFav from './HikeFav.jsx';

const HikeFavList = () => {

  return (
    <div className="fav-hike-list">
      <ul className="fav-hikes">
        <HikeFav />
        <HikeFav />
        <HikeFav />
      </ul>
    </div>
  )
}

export default HikeFavList;