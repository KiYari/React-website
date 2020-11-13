import React from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Interface from '../Layout/Interface';
import ReactPlayer from "react-player";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({
  ytarea: {
    marginTop: theme.spacing(9),
  },
}));

export default function NotFound(props) {
  const classes = useStyles();

  return (
    <Interface>
      <Container className={classes.ytarea}>
        <Grid className={classes.ytarea}>
          <img src="imgs/nfs.jpg" alt="Girl in a jacket" width="100%" height="75%" />
        </Grid>
      </Container>
    </Interface>
  );
}
