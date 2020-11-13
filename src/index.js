import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './index.css';
import Start from './Pages/Start';
import Video from './Pages/Video';
import NoPage from './Pages/NoPage';
import NotFound from './Pages/NotFound'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <NoPage />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
