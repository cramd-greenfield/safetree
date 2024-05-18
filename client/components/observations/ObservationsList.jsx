import React from 'react';
import ObservationEntry from './ObservationEntry.jsx';

const ObservationsList = ({ observations, getObservations }) => {
  const createObservation = () => {
    const { message, isSafe } = observation;
    axios
      .post(`/observations`, { observation: { message, isSafe } })
      .then(() => {
        getObservations();
      })

      .catch((err) => {
        console.error('Failed to Create Observation:', err);
      });
    // [msgRef];
  };

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
