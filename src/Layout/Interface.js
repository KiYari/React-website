import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  intend: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(12),
  }
}));
export default function Interface(props) {

  return (<div className="intend">
    <Header/> {props.children}
    <Footer/>
  </div>);
}
