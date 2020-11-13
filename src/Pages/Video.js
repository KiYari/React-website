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

export default function Video(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const vid_n = props.location.state

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <Interface>
    <Container className={classes.ytarea}>
      {/* End hero unit */}
      <Grid container spacing={3}>
          <Grid item>
          <ReactPlayer className={classes.ytarea}
              url={vid_n}      //"https://www.youtube.com/watch?v=hDgdG6f6F8I"
            />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.head}//How to say step on me in japanese
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  {props.desc}//Weeb is teaching other weebs how to say something in japanese
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color='primary' onClick={handleClickOpen}>Source pls</Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Здраствуйте, заберите ссылку"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {props.vid}//https://www.youtube.com/watch?v=hDgdG6f6F8I
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                      Ну ладно заберу
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              </Grid>
          </Grid>
      </Grid>
    </Container>
    </Interface>
    </Router>
  );
}