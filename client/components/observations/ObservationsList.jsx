import React, { useState } from 'react';
import ObservationEntry from './ObservationEntry.jsx';

const ObservationsList = ({ observations, getObservations }) => {
  return (
    <>
      {observations.map((observation, idx) => (
        <ObservationEntry
          observation={observation}
          getObservations={getObservations}
          key={`${observation}-${idx}`}
        />
      ))}
    </>
  );
};

export default ObservationsList;
