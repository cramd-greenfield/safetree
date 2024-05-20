// Import the useEffect hook from react
import React, { useEffect, useState } from 'react';


import CalendarScript from '../Itinerary/CalendarScript.jsx';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Create component function
const Calendar = () => {
  // Define state variables for current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  /* Important Tags 
    header
    weekdays
    */
  return (
    <div className='container'>
      <div className='calendar'>
        <div className='header'>
          <div className='month'>
            {months[currentMonth]} {currentYear}
          </div>
        </div>
        <div className='weekdays'>
          <div className='day'>Sun</div>
          <div className='day'>Mon</div>
          <div className='day'>Tue</div>
          <div className='day'>Wed</div>
          <div className='day'>Thu</div>
          <div className='day'>Fri</div>
          <div className='day'>Sat</div>
        </div>
        <div className='days'>
          <CalendarScript />
        </div>
      </div>
    </div>
  );
};

// Export component function
export default Calendar;
