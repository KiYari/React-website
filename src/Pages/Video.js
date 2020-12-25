import React from 'react';
import {Route, BrowserRouter as Router, useLocation, Redirect} from "react-router-dom";
import Interface from '../Layout/Interface';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardEx from '../Layout/CardEx'
import VideoComponent from '../Layout/VideoComponent'
import NotFound from './NotFound'
import units from '../Layout/bd'


const useStyles = makeStyles((theme) => ({
  ytarea: {
    marginTop: theme.spacing(12)
  }
}));

export default function Video(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const location = useLocation();

  if (location.state != undefined) {
    return (
      <Interface>
        <Container className={classes.ytarea}>
          <VideoComponent head={location.state.shead} desc={location.state.sdesc} vid={location.state.vid}/>
        </Container>
      </Interface>);
  } else {
    return(
      <Redirect to="/ыыыы" />
    )

  }


}
