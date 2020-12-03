import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NotFound from './NotFound';
import Video from './Video'
import Start from './Start'
import Interface from '../Layout/Interface'

export default function Routemap() {
  return (<Switch>
    <Route exact="exact" path="/" component={Start}/>
    <Route path="/video" component={Video}/>
    <Route component={NotFound}/>
  </Switch>);
}
