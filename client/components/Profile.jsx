import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ObservationsList from './observations/ObservationsList.jsx';
// import fakeData from '../../server/database/fakeData.js';

const Profile = () => {
  const testObj = () => [
    {
      username: 'Cody',
      message: 'Hooks are cool, but confusing at times...',
      animalSpec: 'Bear',
      plantSpec: 'flour',
      hikeLoc: 'over there',
    },
  ];

  const [profile, setProfile] = useState([]);
  const [state, setState] = useState(() => testObj());
  const [observations, setObservations] = useState([]);
  const [feed, setFeed] = useState('');

  const username = state.username;
  const message = state.message;
  const animalSpec = state.animalSpec;
  const plantSpec = state.plantSpec;

  // Post to database
  const createObservations = () => {};

  // get all observations for the feed
  useEffect(() => {
    axios
      .get(`/observations`)
      .then(({ data }) => {
        console.log(data);
        // setObservations(data);
      })
      .catch((err) => console.error('Could not get Feed:', err));
  });

  return (
    <div>
      <h4>User Profile Page</h4>
      <br />
      <br />
      <div>
        <img src={profile.picture} alt='' />
        <p>Name: {profile.name}</p>
        <br />
        <br />
      </div>
      <div>
        <div className='user-chat-box'></div>
        <div className='chat-popup' id='myForm'>
          <form action='/action_page.php' className='form-container'>
            <h1>Chat</h1>

            <label htmlFor='message'></label>
            <textarea
              placeholder='Tell us about your adventures!'
              name={feed}
              required
            ></textarea>

            <button type='submit' className='Send-it'>
              Send
            </button>
            <button type='button' className='Close'>
              Close
            </button>
            {/* <button type='button' className='Close' onClick={}>
            Close
          </button> */}
          </form>
        </div>
        <ObservationsList observations={observations} />
      </div>
    </div>
  );
};

export default Profile;
