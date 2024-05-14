import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <div>
      <h4>User Profile Page</h4>
      <br />
      <br />
      <div>
        <img src={profile.picture} alt='' />
        <p>Name: {profile.name}</p>
        <p>Email Address: {profile.email}</p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Profile;
