import React, { useState } from 'react';
import axios from 'axios';
import { Box, Checkbox, Typography } from '@mui/material';

const ObservationEntry = ({ observation, getObservations }) => {
  const [isSafe, setIsSafe] = useState(true);
  const [message, setMessage] = useState('');
  const updateSafe = () => {
    axios
      .patch(`/observations/${observation.id}`, {
        observation: {
          isSafe: !observation.isSafe,
        },
      })
      .then(getObservations)
      .catch((err) => console.error('Failed to Patch safe:', err));
  };

  const deleteObservation = () => {
    axios
      .delete(`/observations/${observation.id}`, {
        observation: { message },
      })
      .then(getObservations)
      .catch((err) => {
        console.error('Failed to DELETE observation:', err);
      });
  };

  const handleSafe = (e) => {
    setIsSafe(e.target.checked);
  };

  return (
    <div>
      <Box component='span'>
        <button onClick={deleteObservation}>🔥</button>
        <Typography variant='outlined'> Safe:</Typography>

        <Checkbox
          label='safety'
          checked={isSafe}
          onChange={handleSafe}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography variant='contained'> {observation.message}</Typography>
      </Box>
    </div>
    // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //   <Typography variant='contained'>{observation.message}</Typography>
    // </List>
  );
};

export default ObservationEntry;
