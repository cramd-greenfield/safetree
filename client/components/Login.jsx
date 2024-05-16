import React from 'react';
import GoogleButton from 'react-google-button'; // Testing to add a Google button

const Login = () => {
  return (
    <div>
      <h3>Login Screen</h3>
      <form action='/auth/google' method='GET'>
        <button type='submit'>Sign-In</button>
      </form>
    </div>
  );
};

export default Login;
