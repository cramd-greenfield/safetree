import React from 'react';

const ObservationEntry = ({ observation }) => (
  <>
    {console.log(observation)}
    <h5>{observation.message}</h5>
  </>
);

export default ObservationEntry;
