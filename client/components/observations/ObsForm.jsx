import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Typography,
  Container,
  Checkbox,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import ObservationsList from './ObservationsList.jsx';

const ObsForm = ({ getObservations, handleClose, deleteObservation }) => {
  const safe = () => {
    if (isSafe) {
      return '🌳';
    } else {
      return '🍄';
    }
  };
  const [isSafe, setIsSafe] = useState(() => safe());
  const [message, setMessage] = useState('');

  const createObservation = () => {
    axios
      .post(`/observations`, { observation: { message, isSafe } })
      .then(() => {
        getObservations();
      })
      .then(() => {
        setMessage('');
      })
      .catch((err) => {
        console.error('Failed to Create Observation:', err);
      });
  };

  return (
    <>
      <DialogTitle>Reviews</DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        <Typography>
          Safe?
          <Checkbox
            label='safety'
            checked={isSafe}
            onChange={(e) => {
              setIsSafe(e.target.checked);
            }}
          />
        </Typography>
        <TextField
          autoFocus
          required
          value={message}
          margin='dense'
          id='message'
          name='message'
          label='Tell us about your last adventure'
          fullWidth
          variant='standard'
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <TextField
          autoFocus
          required
          value={isSafe}
          margin='dense'
          id='safe'
          name='safety'
          label='Was it safe?'
          fullWidth
          variant='standard'
          onChange={(e) => {
            setIsSafe(e.target.value);
          }}
        />
        <Button variant='outlined' onClick={deleteObservation}>
          🔥
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button variant='contained' type='submit' onClick={createObservation}>
          Submit
        </Button>
      </DialogActions>
      {/* </Dialog> */}
    </>
  );
};

export default ObsForm;
