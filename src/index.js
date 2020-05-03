import React from 'react';
import ReactDOM from 'react-dom';

//Importação da estilização
import './index.css';

//importação do documento "App"
import App from './App';
import * as serviceWorker from './server/serviceWorker';

//Chamada do documento "App"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
