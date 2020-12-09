import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ElectronApp} from "./photolibrary/ElectronApp";

ReactDOM.render(
  <React.StrictMode>
    <ElectronApp />
  </React.StrictMode>,
  document.getElementById('root')
);
