import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav.jsx';
import axios from 'axios';
import {
  Box,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import ObservationsList from './observations/ObservationsList.jsx';

const Home = () => {
  const [observations, setObservations] = useState([]);
  const [message, setMessage] = useState('');
  const [safe, setSafe] = useState(true);
  const [open, setOpen] = useState(false);
  const msgRef = useRef(message);
  const obRef = useRef(observations);

  const createObservation = () => {
    axios
      .post(`/observations`, { observation: { message, safe } })
      .then(() => {
        getObservations();
      })
      // .then(getObservations())
      .catch((err) => {
        console.error('Failed to Create Observation:', err);
      });
    // [msgRef];
  };

  const openChat = () => {
    setOpen(true);
  };
  const hideChat = () => {
    setOpen(false);
  };
  const isSafe = () => {
    setSafe(true);
  };
  const notSafe = () => {
    setSafe(false);
  };
  const getObservations = () => {
    axios
      .get(`/observations`)
      .then(({ data }) => {
        setObservations((...prevData) => (prevData = data));
      })
      .catch((err) => console.error('Could not get Feed:', err));
  };
  useEffect(() => {
    getObservations();
  }, [obRef]);

  return (
    <Box>
      <Box
        sx={{
          display: 'inline-flex',
          alignContent: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Typography variant='h2'>SafeTree</Typography>
      </Box>
      <Nav />
      <Box>
        <Typography variant='h4'>Username:</Typography>
      </Box>
      <Button variant='contained' onClick={openChat}>
        Chat!
      </Button>
      <TextField
        fullWidth
        autoFocus
        required
        margin='dense'
        id='name'
        name='message'
        label='How did it go?'
        variant='outlined'
      />
      <Dialog open={open} onClose={hideChat}>
        <DialogTitle>Previous Adventures!</DialogTitle>
        <DialogContent>
          <ObservationsList observations={observations} />
          <DialogContentText>{/* description */}</DialogContentText>
          <TextField
            fullWidth
            autoFocus
            required
            value={message}
            margin='dense'
            id='name'
            name='message'
            label='How did it go?'
            variant='outlined'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideChat}>Cancel</Button>
          <Button type='submit' onClick={() => createObservation()}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
