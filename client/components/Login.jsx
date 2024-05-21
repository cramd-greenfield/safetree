import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { st } from '../components/observations/styles.js';

const Login = () => {
  return (
    <div>
      <Box sx={st}>
        <Box>
          <Typography variant='h2' align='center' gutterBottom>
            SafeTree
          </Typography>
        </Box>
        <form action='/auth/google' method='GET'>
          <h3>Login to Safe-Tree Here!</h3>
          <Button variant='contained' type='submit'>
            Sign-In
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Login;
