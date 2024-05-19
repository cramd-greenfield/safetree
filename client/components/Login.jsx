import React from 'react';
import { Button } from '@mui/material';

const Login = () => {
  return (
    <div>
      <h3>Login Screen</h3>
      <form action='/auth/google' method='GET'>
        <Button variant='contained' type='submit'>
          Sign-In
        </Button>
      </form>
    </div>
  );
};

export default Login;
