import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Typography,
  Container,
  Checkbox,
  Avatar,
  TextField,
} from '@mui/material';

const ObsForm = ({ observations, getObservations }) => {
  const createObservation = () => {
    axios
      .post(`/observations`, { observation: { message, isSafe } })
      .then(() => {
        getObservations();
      })
      .then(() => {
        setMessage('');
      })
      .catch((err) => {
        console.error('Failed to Create Observation:', err);
      });
  };
  return (
    <>
      <Button variant='contained' type='submit' onClick={createObservation}>
        Submit
      </Button>
    </>
  );
};

export default ObsForm;
