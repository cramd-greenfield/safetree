import React, { useState } from 'react';
import axios from 'axios';
import { Box, Checkbox, Typography, Button, Divider } from '@mui/material';

const ObservationEntry = ({ observation, getObservations }) => {
  const [isSafe, setIsSafe] = useState(true);
  const [message, setMessage] = useState('');
  const updateSafe = () => {
    const { isSafe } = observation;
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

  return (
    <div>
      <Box>
        <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
          <Button variant='outlined' onClick={deleteObservation}>
            🔥
          </Button>
          <Typography variant='contained'> {observation.message}</Typography>
          <Typography variant='contained'>{observation.safe}</Typography>

          <input
            type='checkbox'
            onChange={updateSafe}
            checked={observation.isSafe}
          />
        </Box>
      </Box>
    </div>
    // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //   <Typography variant='contained'>{observation.message}</Typography>
    // </List>
  );
};

export default ObservationEntry;
