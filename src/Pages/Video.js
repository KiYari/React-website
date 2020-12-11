import React from 'react';
import {Route, BrowserRouter as Router, useLocation} from "react-router-dom";
import Interface from '../Layout/Interface';
import ReactPlayer from "react-player";
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
const useStyles = makeStyles((theme) => ({
  ytarea: {
    marginTop: theme.spacing(9)
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

  return (
    <Interface>
      <Container className={classes.ytarea}>
        {/* End hero unit */}
        <Grid container="container" spacing={3}>
          <Grid item="item">
            <ReactPlayer className={classes.ytarea} url={location.state.vid}
            />
            <Grid container="container" spacing={3}>
              <Grid item="item" xs={12}>
                <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
                  {location.state.shead}
                </Typography>
              </Grid>
              <Grid item="item" xs={6}>
                <Typography>
                  {location.state.sdesc}
                </Typography>
              </Grid>
              <Grid item="item" xs={6}>
                <Button variant="contained" color='primary' onClick={handleClickOpen}>Source pls</Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                  <DialogTitle id="alert-dialog-title">{"Здраствуйте, заберите ссылку"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {location.state.vid}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus="autoFocus">
                      Ну ладно заберу
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Interface>);
}
