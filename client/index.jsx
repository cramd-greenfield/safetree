import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('app');
const root = createRoot(rootEl);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
