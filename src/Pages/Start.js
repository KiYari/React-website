import React from 'react';
import {Route, BrowserRouter as Router, Link, Switch, Redirect} from 'react-router-dom';
import NotFound from './NotFound';
import Video from './Video'
import Contentt from '../Layout/Content'
import CardEx from '../Layout/CardEx'
import Interface from '../Layout/Interface'

export default function Start() {
  return (
    <Interface>
      <Contentt>
        <CardEx/>
      </Contentt>
    </Interface>

);
}
