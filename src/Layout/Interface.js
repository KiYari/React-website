import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import {makeStyles} from '@material-ui/core/styles';

export default function Interface(props) {

  return (<div>
    <Header/> {props.children}
    <Footer/>
  </div>);
}
