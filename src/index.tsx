import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Components/Header';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

