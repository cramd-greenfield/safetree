import React from 'react';

import HikeSearch from './HikeSearch.jsx';
import HikesFavList from './HikesFavList.jsx';

const Hikes = () => {

  return (
    <div className="hikes">
      <HikeSearch />
      <HikesFavList />
    </div>
  )
}

export default Hikes;
