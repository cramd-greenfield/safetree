import React from 'react';
import ObservationEntry from './ObservationEntry.jsx';

const ObservationsList = ({ observations }) => {
  console.log(observations); // empty...
  return (
    <>
      {observations.map((observation, idx) => (
        <ObservationEntry
          observation={observation}
          // key={observation.id}
          key={`${observation}-${idx}`}
        />
      ))}
    </>
  );
};

export default ObservationsList;
