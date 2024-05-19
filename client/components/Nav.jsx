import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const Nav = () => {
  return (
    <Box sx={{ gap: '20px', display: 'flex', alignContent: 'center' }}>
      <Link to='/wildlife'>
        <Button type='submit'>WildLife Info</Button>
      </Link>
      <Link to='/plants'>
        <Button type='submit'>Plant Info</Button>
      </Link>
      <Link to='/hikes'>
        <Button type='submit'>Hike Info</Button>
      </Link>
      <Link to='/calender'>
        <Button type='submit'>Planning</Button>
      </Link>
    </Box>
  );
};

export default Nav;
