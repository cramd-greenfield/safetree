import React from 'react';

import HikeResult from './HikeResult.jsx';

const HikeResults = ({ results }) => {

  return (
    <div className="hike-search-result-list">
      {
        results.map((result, i) => {
          return (
            <HikeResult
              hike={ result }
              key={`${result}-${i}`}
            />
          )
        })
      }
    </div>
  )
}

export default HikeResults;