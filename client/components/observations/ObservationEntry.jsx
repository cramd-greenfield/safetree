import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Typography,
  Checkbox,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const ObservationEntry = ({ observation, getObservations }) => {
  const [open, setOpen] = useState(false);
  const [isSafe, setIsSafe] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateReview = () => {
    axios
      .patch(`/observations/${observation.id}`, {
        observation: {
          message: message,
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
          {/* <Button variant='outlined' onClick={deleteObservation}>
            🔥
          </Button> */}
          <Box sx={{ gap: 20, justifyContent: 'space-evenly' }}>
            <Typography align='left' variant='contained' gutterBottom>
              {observation.message}
            </Typography>
            <Typography align='right' variant='contained'>
              {checkSafe}
            </Typography>
          </Box>
          {/* <Button variant='outlined' onClick={handleClickOpen}>
            Edit
          </Button> */}

          {/* {observation.isSafe} */}
        </Box>
        {/* <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              handleClose(event.target.value);
            },
          }}
        >
          <DialogTitle>Add a Review</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Button variant='outlined' onClick={deleteObservation}>
                🔥
              </Button>
              <Typography variant='contained'>
                {' '}
                {observation.message}
              </Typography>
              <Typography align='right' variant='contained'>
                {checkSafe}
              </Typography>
            </DialogContentText>

            <Typography>
              Safe?
              <Checkbox
                label='safety'
                checked={isSafe}
                onChange={(e) => {
                  setIsSafe(e.target.checked);
                }}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Typography>
            <TextField
              autoFocus
              value={observation.message}
              margin='dense'
              id='message'
              name='message'
              label='Tell us about your last adventure'
              fullWidth
              variant='standard'
            />
            <Button variant='outlined' onClick={deleteObservation}>
              🔥
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button
              variant='contained'
              type='submit'
              onClick={createObservation}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog> */}
      </Box>
    </div>
  );
};

export default ObservationEntry;
