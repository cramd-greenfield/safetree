import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Typography,
  Grid,
  ToggleButton,
  Box,
  ToggleButtonGroup,
} from '@mui/material';

const ObservationEntry = ({ observation, getObservations, handleClose }) => {
  const [isSafe, setIsSafe] = useState('safe');

  const handleIsSafe = (event, newIsSafe) => {
    setIsSafe(newIsSafe);
  };

  const updateReview = () => {
    const { message, isSafe } = observation;
    axios
      .patch(`/observations/${observation.id}`, {
        observation: {
          message,
          isSafe: !observation.isSafe,
        },
      })
      .then(getObservations)
      .catch((err) => console.error('Failed to Patch safe:', err));
  };

  const deleteObservation = () => {
    const { message, isSafe } = observation;
    axios
      .delete(`/observations/${observation.id}`, {
        observation: { message, isSafe },
      })
      .then(getObservations)
      .catch((err) => {
        console.error('Failed to DELETE observation:', err);
      });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <Box sx={{ gap: 20, justifyContent: 'space-evenly' }}>
        <Typography align='left' variant='contained'>
          <Button size='small' variant='contained' onClick={deleteObservation}>
            🔥
          </Button>

          <ToggleButtonGroup
            value={isSafe}
            exclusive
            onChange={handleIsSafe}
            aria-label='safe-selection'
            onSubmit={(e) => {
              setIsSafe(e.target.value);
            }}
          >
            <ToggleButton
              value='safe'
              onClick={updateReview}
              aria-label='safe-tree'
            >
              🌳
            </ToggleButton>
            <ToggleButton
              value='not-safe'
              onClick={updateReview}
              aria-label='do-not-sign'
            >
              🚫
            </ToggleButton>
          </ToggleButtonGroup>
        </Typography>
        <Typography align='right' variant='contained' gutterBottom>
          {observation.message}
        </Typography>

        <Typography align='left' variant='contained' gutterBottom>
          {/* {observation.isSafe} places a 1 or 0 for true or false */}
        </Typography>
      </Box>
    </Box>
  );
};

export default ObservationEntry;
