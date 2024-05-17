import React, { useState } from 'react';

import HikeSearch from './HikeSearch.jsx';
// import HikeResults from './HikeResults.jsx';
// import HikeFavList from './HikeFavList.jsx';

const Hikes = () => {

  return (
    <div className="hikes">
      <h2>Hikes</h2>
      <div className="hike-search">
        <h4>Search for trails near you:</h4>
        <HikeSearch />
      </div>
      {/* <div className="hike-results">
        <h4>Local Results</h4>
        <HikeResults results={ results } />
      </div> */}
      {/* <div className="hike-favs">
        <h4>Favorite Trails</h4>
        <HikeFavList />
      </div> */}
    </div>
  )
}

export default Hikes;
