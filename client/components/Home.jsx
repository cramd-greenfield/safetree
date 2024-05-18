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
} from '@mui/material';
import ObservationsList from './observations/ObservationsList.jsx';

const Home = () => {
  const [observations, setObservations] = useState([]);
  const [message, setMessage] = useState('');
  const obRef = useRef(observations);
  // const [username, setUsername] = useState('');

  const getObservations = () => {
    axios
      .get(`/observations`)
      .then(({ data }) => {
        setObservations(data);
      })
      .catch((err) => console.error('Could not get Feed:', err));
  };
  useEffect(() => {
    getObservations();
  }, [obRef]);

  return (
    <div>
      <Container>
        <Box display='inline-flex' alignItems='center'>
          <Typography variant='h2' gutterBottom>
            SafeTree
          </Typography>
        </Box>
        <Nav />
        <Box>
          <Container>
            {/* <Typography variant='h4'>{username}</Typography> */}
            {/* <Avatar src='/style/logo.jpg' alt={username} /> */}
          </Container>
        </Box>
        <Box height={400} width={500} sx={{ border: '4px solid black' }}>
          <ObservationsList observations={observations} />
        </Box>
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder='message'
        />
        {/* <button onClick={createObservation} type='button'> */}
        Submit
        {/* </button> */}
      </Container>
    </div>

    // <Box>
    //   <Box
    //     sx={{
    //       display: 'inline-flex',
    //       alignContent: 'center',
    //       justifyContent: 'space-evenly',
    //     }}
    //   >
    //     <Typography variant='h2'>SafeTree</Typography>
    // </Box>
    // <Nav />
    // <Box>
    //     <Typography variant='h4'>{username}</Typography>
    //     <Avatar alt={username} src='/logo.jpg' />
    //     <li>Name:</li>
    //     <li>Username:</li>
    //   </Box>
    //   <Typography variant='h4'>Adventures</Typography>
    //   <Box height={400} width={600} sx={{ border: '3px solid grey' }}>
    //     <ObservationsList observations={observations} safe={handleSafe} />
    //     <TextField
    //       fullWidth
    //       autoFocus
    //       value={message}
    //       margin='dense'
    //       id='name'
    //       name='message'
    //       label='How did it go?'
    //       variant='outlined'
    //       onChange={(e) => {
    //         setMessage(e.target.value);
    //       }}
    //     />
    //   </Box>
    //   Safe?
    //   <Checkbox
    //     label='safety'
    //     checked={safe}
    //     onChange={handleSafe}
    //     inputProps={{ 'aria-label': 'controlled' }}
    //   />
    //   <Button variant='contained' onSubmit={createObservation}>
    //     Submit
    //   </Button>
    // </Box>
  );
};

export default Home;
