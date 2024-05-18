import React, { useState } from 'react';

import HikeSearch from './HikeSearch.jsx';

const Hikes = () => {

  return (
    <div className="hikes">
      <h2>Hikes</h2>
      <div className="hike-search">
        <h4>Search for trails near you:</h4>
        <HikeSearch />
      </div>
    </div>
  )
}

export default Hikes;
