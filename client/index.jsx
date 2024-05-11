import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

// grab root element
const rootEl = document.getElementById('app');

// create root
const root = createRoot(rootEl);

// render app to root
root.render(<App />);
