import React from 'react';

const ObservationEntry = ({ item }) => (
  <>
    {console.log(item)}
    <h5>{item.message}</h5>
  </>
);

export default ObservationEntry;
