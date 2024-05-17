import React from 'react';

const ObservationEntry = ({ observation }) => {
  console.log(observation);
  return (
    <div>
      <h5>{observation.message}</h5>;
    </div>
  );
};

export default ObservationEntry;
