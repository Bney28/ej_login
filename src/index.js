import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='bney1.us.auth0.com'
  clientId='4whStNBoiCv9b0pBHMoaiMpphVG5eUuP'
  authorizationParams={{redirect_uri: window.location.origin}}>
    <App />
  </Auth0Provider>
  
);

