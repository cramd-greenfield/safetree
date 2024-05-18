import React from 'react';

const ObservationEntry = ({ observation }) => {
  return (
    <div>
      <h5>{observation.message}</h5>
    </div>
  );
};

export default ObservationEntry;
