import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './app';
import GlobalStyle from "./styles";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
