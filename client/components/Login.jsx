import React from 'react';

const Login = () => {
  return (
    <>
      <h3>Login Screen</h3>
      <form action='/auth/google' method='GET'>
        <button type='submit'>Sign-In</button>
      </form>
    </>
  );
};

export default Login;
