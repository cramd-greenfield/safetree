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
} from '@mui/material';
import logo from '../style/logo.png';
import ObservationsList from './observations/ObservationsList.jsx';
// import Custom from './observations/Custom.jsx';

const Home = () => {
  const [observations, setObservations] = useState([]);
  const [message, setMessage] = useState('');
  // const [isSafe, setIsSafe] = useState(false);
  const obRef = useRef(observations);

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

  const getObservations = () => {
    axios
      .get(`/observations`)
      .then(({ data }) => {
        // setObservations(data);
        setObservations((...prevData) => (prevData = data));
      })
      .catch((err) => console.error('Could not get Feed:', err));
  };
  useEffect(() => {
    getObservations(), [obRef];
  });

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 200,
          padding: 10,
        }}
      >
        <Box>
          <Typography variant='h2' align='center' gutterBottom>
            SafeTree
          </Typography>
        </Box>
        <Nav />
        <Box>
          <Avatar src={`${logo}`} />
        </Box>
        <Box
          height={400}
          width={500}
          sx={{
            border: '4px solid black',
            backgroundColor: 'background.paper',
          }}
        >
          <Box
            sx={{
              gap: 20,
              display: 'inline-flex',
              backgroundColor: 'green',
              width: '100%',
            }}
          >
            <Typography align='left' variant='h8'>
              Remove
            </Typography>

            <Typography variant='h8'>Review</Typography>
          </Box>

          <ObservationsList
            observations={observations}
            getObservations={getObservations}
          />
        </Box>
        <Box
          component='form'
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        ></Box>
        <Button variant='contained' type='submit' onClick={createObservation}>
          Submit
        </Button>
        {/* <Button type='submit' onClick={updateSafe} variant='contained'>
          Update Review
        </Button> */}
      </Box>
    </div>
  );
};

export default Home;
