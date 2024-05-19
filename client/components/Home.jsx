import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav.jsx';
import axios from 'axios';
import {
  Box,
  Button,
  Typography,
  Container,
  Checkbox,
  Avatar,
  TextField,
  Divider,
  Dialog,
} from '@mui/material';
import logo from '../style/logo.png';
import ObservationsList from './observations/ObservationsList.jsx';
import ObsForm from './observations/ObsForm.jsx';
import { st, reviewBox, boxHeader } from './observations/styles.js';

const Home = () => {
  const [observations, setObservations] = useState([]);
  const [open, setOpen] = useState(false);
  // const [isSafe, setIsSafe] = useState(false);
  const obRef = useRef(observations);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getObservations = () => {
    axios
      .get(`/observations`)
      .then(({ data }) => {
        setObservations(data);
        // setObservations((...prevData) => (prevData = data));
      })
      .catch((err) => console.error('Could not get Feed:', err));
  };
  useEffect(() => {
    getObservations(), [obRef];
  });

  return (
    <div>
      <Box sx={st}>
        <Box>
          <Typography variant='h2' align='center' gutterBottom>
            SafeTree
          </Typography>
        </Box>
        <Nav />
        <Box>
          <Avatar src={`${logo}`} />
        </Box>
        <Box height={300} width={400} sx={reviewBox}>
          <Box sx={boxHeader}>
            <Typography align='left' variant='h8'>
              Review
            </Typography>
            <Typography align='right' variant='h8'>
              Safe: / Unsafe:
            </Typography>
          </Box>
          <Box sx={{ overflow: 'hidden' }}>
            <ObservationsList
              observations={observations}
              getObservations={getObservations}
            />
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: (e) => {
                handleClose(e.target.value);
              },
            }}
          >
            <ObsForm
              getObservations={getObservations}
              handleClose={handleClose}
            />
          </Dialog>
        </Box>
        <Button variant='contained' type='submit' onClick={handleOpen}>
          Edit Reviews
        </Button>
      </Box>
    </div>
  );
};

export default Home;
