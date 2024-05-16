import React from 'react';
import ObservationEntry from './ObservationEntry.jsx';
import fakeData, {
  fakeObservations,
} from '../../../server/database/fakeData.js';

const ObservationsList = ({ observations }) => {
  console.log(observations); // empty...
  // console.log('obs', props);
  return (
    <>
      {observations.map((observation) => (
        <ObservationEntry observation={observation} key={observation.id} />
      ))}
    </>
  );
};

export default ObservationsList;
