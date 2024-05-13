import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const rootEl = document.getElementById('app');
const root = createRoot(rootEl);

root.render(
  <GoogleOAuthProvider clientId='810262683853-c7ian9n6fk5nkoipl3fnqnibeqpf2j2m.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
);
