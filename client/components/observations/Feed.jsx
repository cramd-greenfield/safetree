import React from 'react';
import axios from 'axios';
import ObservationsList from './ObservationsList.jsx';

const Feed = () => {
  const [observations, setObservations] = useState([]);
  const [activity, setActivity] = useState('');
  const [feed, setFeed] = useState('');

  // get all observations for the feed
  useEffect(() => {
    axios(`/observations`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.error('Could not get Feed:', err));
  });
  return (
    <>
      <ObservationsList />
    </>
  );
};

export default Feed;
