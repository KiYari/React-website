import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import './index.css';
import Start from './Pages/Start';
import Video from './Pages/Video';
import NoPage from './Pages/NoPage';
import NotFound from './Pages/NotFound';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Router>
  <NoPage/>
    <Switch>
      <Route exact="exact" path="/"><Start /></Route>
      <Route exact="exact" path="/video/1"> <Video/></Route>
      <Route exact="exact" path="/video/2"> <Video/></Route>
      <Route exact="exact" path="/video/3"> <Video/></Route>
      <Route exact="exact" path="/video/4"> <Video/></Route>
      <Route exact="exact" path="/video/5"> <Video/></Route>
      <Route exact="exact" path="/video/6"> <Video/></Route>
      <Route exact="exact" path="/video/7"> <Video/></Route>
      <Route exact="exact" path="/video/8"> <Video/></Route>
      <Route exact="exact" path="/video/9"> <Video/></Route>
      <Route exact="exact" path="/video/10"> <Video/></Route>
      <Route exact="exact" path="/video/11"> <Video/></Route>
      <Route exact="exact" path="/video/12"> <Video/></Route>
      <Route><NotFound/></Route>
    </Switch>
</Router>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
