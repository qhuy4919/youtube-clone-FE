import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'semantic-ui-css/semantic.min.css';
import './style/helpers/reset.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
