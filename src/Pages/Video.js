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
const units = [
{
    id: 1,
    vid: "https://www.youtube.com/watch?v=mUnSJjnrcQs&t",
    head: "Outward",
    desc: "Big desert cooking simulator",
    imgs: "imgs/1.jpg",
},
{
  id: 2,
  head: "Recettear",
  desc: "Capitalism in action on small kid labour",
  imgs: "imgs/2.jpg",
  vid: "https://www.youtube.com/watch?v=JJd85HFq71c",
},
{
  id: 3,
  head: "Endless Space 2",
  desc: "Capitalism in action but in space and with big alien mommy",
  imgs: "imgs/3.jpg",
  vid: "https://www.youtube.com/watch?v=VKEawmH-l9c&t",
},
{
  id: 4,
  head: "Total Annihilation Kingdoms",
  desc: "Shared suffering with siblings or smth like that idk",
  imgs: "imgs/4.jpg",
  vid: "https://www.youtube.com/watch?v=se6Y2o3OqJQ&t",
},
{
  id: 5,
  head: "Kurdish Senior Hitler",
  desc: "Manual how to lead Hitler to Kurdish people",
  imgs: "imgs/5.jpg",
  vid: "https://www.youtube.com/watch?v=YJAbjj_eE-A",
},
{
  id: 6,
  head: "Turkey Uprising",
  desc: "Attaturk will die and his son or smth will be in charge",
  imgs: "imgs/6.jpg",
  vid: "https://www.youtube.com/watch?v=s4Sg-WuaNWE",
},
{
  id: 7,
  head: "Sword of Allah",
  desc: "Five habibis vs British Emperie",
  imgs: "imgs/7.jpg",
  vid: "https://www.youtube.com/watch?v=avIwV-teIDM",
},
{
  id: 8,
  head: "Independance Day",
  desc: "Commie asian party at French Asian Sphere riots and then revolts",
  imgs: "imgs/8.jpg",
  vid: "https://www.youtube.com/watch?v=moRdztAsL9c",
},
{
  id: 9,
  head: "Weeb asks other weebs if they are virgin",
  desc: "IDK is it interesting or not but weeb asking other weebs on OMEGLE if they are virgin",
  imgs: "imgs/9.jpg",
  vid: "https://www.youtube.com/watch?v=mlUDKbFNB8k",
},
{
  id: 10,
  head: "How to say step on me in japanese",
  desc: "Weeb is teaching other weebs how to say something in japanese",
  imgs: "imgs/10.jpg",
  vid: "https://www.youtube.com/watch?v=hDgdG6f6F8I",
},
{
  id: 11,
  head: "Weeb pretending to be JOJO in VRchat",
  desc: "Hopeless weeb is trying to look like Jotaro",
  imgs: "imgs/11.jpg",
  vid: "https://www.youtube.com/watch?v=fouD_my1GFg",
},
{
  id: 12,
  head: "The best game in Among Us",
  desc: "Weeb plays perfectly in Among Us until he got caught because of some accident",
  imgs: "imgs/12.jpg",
  vid: "https://www.youtube.com/watch?v=Eyg5LAWzoW8&t",
},];


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

  if (units[window.location.pathname.split('/')[2]] != null) {
    return (
      <Interface>
        <Container className={classes.ytarea}>
          <VideoComponent head={units[window.location.pathname.split('/')[2]].head}
            desc={units[window.location.pathname.split('/')[2]].desc}
            vid={units[window.location.pathname.split('/')[2]].vid}/>
        </Container>
      </Interface>);
  } else {
    return(
      <Redirect to="/ыыыы" />
    )

  }


}
