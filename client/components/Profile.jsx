import React, { useState } from 'react';
import { useGoogleLogin, googleLogout, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(() => logout);
  const [user, setUser] = useState([]);

  // login;
  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => console.log('Login Failed:', error),
  });

  //logout
  const logout = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <h4>User Profile Page</h4>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt='' />
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <GoogleLogin onSuccess={login} onError={logout} />
        // <button onClick={login}>Sign in</button>
      )}
    </div>
  );
};

export default Profile;
