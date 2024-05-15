import React from 'react';
import WildLife from './WildLife.jsx';

import Calendar from './Calendar.jsx';
import Profile from './Profile.jsx';
import Plants from './plants/Plants.jsx';
import Hikes from './hikes/Hikes.jsx';

const App = () => {
  return (
    <div>
      <div></div>
      <div className='header'>
        <h2 className='logo'>SafeTree</h2>
        <div className='navbar'>
          <p>Links to features here</p>
        </div>
      </div>
      <div className='features'>
        <div className='feature'>
          <div className='wildlife'>
            <h4>wildlife component here</h4>
            <WildLife />
          </div>
        </div>
        <div className='feature'>
          <div className='plants'>
            <Plants />
          </div>
        </div>
        <div className='feature'>
          <div className='activities'>
            <h4>Hikes</h4>
            <Hikes />
          </div>
        </div>
        <div className="feature">
          <div className="calendar">
            <h4>calendar component here
              <Calendar />
            </h4>
          </div>
        </div>
        <div className='feature'>
          <div className='observations'>
            <h4>observations component here</h4>
            <HomePage />
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>bottom of page things go here</p>
      </div>
    </div>
  );
};

export default App;
