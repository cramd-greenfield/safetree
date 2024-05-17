import React from 'react';

import HikeResult from './HikeResult.jsx';

const HikeResults = ({ results }) => {
  console.log('results passed into HikeResults', results, Array.isArray(results));
  return (
    <div className="fav-hike-list">
      {
        results.map((result) => {
          console.log('result', result);
          <HikeResult
            hike={ result }
          />
        })
      }
    </div>
  )
}

export default HikeResults;