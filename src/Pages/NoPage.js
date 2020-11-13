import React from 'react';
import {Route, BrowserRouter as Router, Link, Switch, Redirect} from 'react-router-dom';
import NotFound from './NotFound';
import Video from './Video'
import Start from './Start'
import Routemap from './Routemap'
import Interface from '../Layout/Interface'


export default function NoPage() {
  return (
    <Router>
      <Routemap />
    </Router>
  );
}
