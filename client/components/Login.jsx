import React from 'react';

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
