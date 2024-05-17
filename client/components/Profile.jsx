import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ObservationsList from './observations/ObservationsList.jsx';

const test = 57;
const Profile = () => {
  const [observations, setObservations] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [safe, setSafe] = useState(true);
  const obRef = useRef(observations);
  const [show, hide] = useState(false);

  // Post to database
  const createObservations = () => {
    axios
      .post(`/observations`, { observation: title, message, safe })
      .then((observation) => {
        console.log(observation.data);
      })
      .catch((err) => {
        console.error('Failed to Create Observation:', err);
      });
  };

  useEffect(() => {
    axios
      .get(`/observations`)
      .then(({ data }) => {
        setObservations((prevData) => (prevData = data));
      })
      .catch((err) => console.error('Could not get Feed:', err));
  }, [obRef]);

  return (
    <div>
      <div>
        <div className='user-chat-box'></div>

        {/* <span>{observations}</span> */}
        <textarea
          placeholder='Tell us about your adventures!'
          // value={observations}
          name='observations'
          required
          // onChange={}
        ></textarea>

        <button
          type='submit'
          onClick={() => createObservations()}
          className='Send-it'
        >
          Send
        </button>
        <button type='button' className='Close' onClick={() => hide(!show)}>
          Close
        </button>

        <>
          <ObservationsList observations={observations} />
        </>
      </div>
    </div>
  );
};

export default Profile;
