// eslint-disable-next-line prettier/prettier
import React from 'react';
// eslint-disable-next-line prettier/prettier
import ReactDOM from 'react-dom';
// eslint-disable-next-line prettier/prettier
import './styles/global-styles.css';

// eslint-disable-next-line prettier/prettier
import { Home } from './template/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  // eslint-disable-next-line prettier/prettier
  document.getElementById('root'),
);
