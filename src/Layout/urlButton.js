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
import CardEx from './CardEx'
const cards = [
  <CardEx head="Outward" desc="Big desert cooking simulator" imgs='imgs/1.jpg' vid='https://www.youtube.com/watch?v=mUnSJjnrcQs&t' id="1"/>,
  <CardEx head="Recettear" desc="Capitalism in action on small kid labour" imgs='imgs/2.jpg' vid='https://www.youtube.com/watch?v=JJd85HFq71c' id="2"/>,
  <CardEx head="Endless Space 2" desc="Capitalism in action but in space and with big alien mommy" imgs='imgs/3.jpg' vid='https://www.youtube.com/watch?v=VKEawmH-l9c&t' id="3"/>,
  <CardEx head="Total Annihilation Kingdoms" desc="Shared suffering with siblings or smth like that idk" imgs='imgs/4.jpg' vid='https://www.youtube.com/watch?v=se6Y2o3OqJQ&t' id="4"/>,
  <CardEx head="Kurdish Senior Hitler" desc="Manual how to lead Hitler to Kurdish people" imgs='imgs/5.jpg' vid='https://www.youtube.com/watch?v=YJAbjj_eE-A' id="5"/>,
  <CardEx head="Turkey Uprising" desc="Attaturk will die and his son or smth will be in charge" imgs='imgs/6.jpg' vid='https://www.youtube.com/watch?v=s4Sg-WuaNWE' id="6"/>,
  <CardEx head="Sword of Allah" desc="Five habibis vs British Emperie" imgs='imgs/7.jpg' vid='https://www.youtube.com/watch?v=avIwV-teIDM' id="7"/>,
  <CardEx head="Independance Day" desc="Commie asian party at French Asian Sphere riots and then revolts" imgs='imgs/8.jpg' vid='https://www.youtube.com/watch?v=moRdztAsL9c' id="8"/>,
  <CardEx head="Weeb asks other weebs if they are virgin" desc="IDK is it interesting or not but weeb asking other weebs on OMEGLE if they are virgin" imgs='imgs/9.jpg' vid='https://www.youtube.com/watch?v=mlUDKbFNB8k' id="9"/>,
  <CardEx head="How to say step on me in japanese" desc="Weeb is teaching other weebs how to say something in japanese" imgs='imgs/10.jpg' vid='https://www.youtube.com/watch?v=hDgdG6f6F8I' id="10"/>,
  <CardEx head="Weeb pretending to be JOJO in VRchat" desc="Hopeless weeb is trying to look like Jotaro" imgs='imgs/11.jpg' vid='https://www.youtube.com/watch?v=fouD_my1GFg' id="11"/>,
  <CardEx head="The best game in Among Us" desc="Weeb plays perfectly in Among Us until he got caught because of some accident" imgs='imgs/12.jpg' vid='https://www.youtube.com/watch?v=Eyg5LAWzoW8&t' id="12"/>
];
const useStyles = makeStyles((theme) => ({
  ytarea: {
    marginTop: theme.spacing(9)
  }
}));

export default function UrlButton(props) {
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
              <Grid item="item" xs={6}>
                <Button variant="contained" color='primary' onClick={handleClickOpen}>Source pls</Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                  <DialogTitle id="alert-dialog-title">{"Здраствуйте, заберите ссылку "}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      {props.urls}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus="autoFocus">
                      Ну ладно заберу
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>);
}
