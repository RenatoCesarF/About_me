//Mean file, this one is whitch will be rendered in the end.
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import * as serviceWorker from './server/serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
