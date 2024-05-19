import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Typography,
  Container,
  Checkbox,
  Avatar,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const ObsForm = ({ observations, getObservations, deleteObservation }) => {
  const [open, setOpen] = React.useState(false);
  const [isSafe, setIsSafe] = useState(true);
  const [message, setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const updateReview = () => {
    axios
      .patch(`/observations/${observations.id}`, {
        observation: {
          message: message,
          isSafe: !observations.isSafe,
        },
      })
      .then(() => getObservations())
      .catch((err) => console.error('Failed to Patch safe:', err));
  };

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Edit Reviews
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (e) => {
            handleClose(e.target.value);
          },
        }}
        onChange={updateReview}
      >
        <DialogTitle>Reviews</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What would you like to add to your list of reviews?
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
            required
            value={observations.message}
            margin='dense'
            id='message'
            name='message'
            label='Tell us about your last adventure'
            type='email'
            fullWidth
            variant='standard'
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
      </Dialog>
    </>
  );
};

export default ObsForm;
