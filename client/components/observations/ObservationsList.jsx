import React from 'react';
import ObservationEntry from './ObservationEntry.jsx';
import fakeData, {
  fakeObservations,
} from '../../../server/database/fakeData.js';

const ObservationsList = (props, { observations }) => {
  props = fakeObservations;
  console.log(observations);
  // console.log('obs', props);
  return (
    <div>
      {props.map((item, idx) => (
        <ObservationEntry item={item} key={`${item}-${idx}`} />
      ))}
    </div>
  );
};

export default ObservationsList;
