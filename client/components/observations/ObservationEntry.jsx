import React, { useState } from 'react';
import axios from 'axios';
import { Box, Checkbox, Typography, Button } from '@mui/material';

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
      .then(() => getObservations())
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

  const checkSafe = observation.isSafe ? '🍄' : '🌳';

  return (
    <div>
      <Box>
        <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
          <Button variant='outlined' onClick={deleteObservation}>
            🔥
          </Button>
          <Typography variant='contained'> {observation.message}</Typography>
          <Typography variant='contained'>{checkSafe}</Typography>

          <Checkbox
            label='safety'
            checked={isSafe}
            onChange={(e) => {
              setIsSafe(e.target.checked);
            }}
            // onChange={updateSafe}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          {observation.isSafe}
        </Box>
      </Box>
    </div>
  );
};

export default ObservationEntry;
