import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardEx from './CardEx'
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  gridbox: {},
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  ytarea: {
    marginTop: theme.spacing(13),
    marginLeft: theme.spacing(12),
    width: '90%',
    height: '90%',

  }
}));

const cards = [
  <CardEx head="Outward" desc="Big desert cooking simulator" imgs='imgs/1.jpg' vid='https://www.youtube.com/watch?v=mUnSJjnrcQs&t' vref="video/1"/>,
  <CardEx head="Recettear" desc="Capitalism in action on small kid labour" imgs='imgs/2.jpg' vid='https://www.youtube.com/watch?v=JJd85HFq71c' vref="video/2"/>,
  <CardEx head="Endless Space 2" desc="Capitalism in action but in space and with big alien mommy" imgs='imgs/3.jpg' vid='https://www.youtube.com/watch?v=VKEawmH-l9c&t' vref="video/3"/>,
  <CardEx head="Total Annihilation Kingdoms" desc="Shared suffering with siblings or smth like that idk" imgs='imgs/4.jpg' vid='https://www.youtube.com/watch?v=se6Y2o3OqJQ&t' vref="video/4"/>,
  <CardEx head="Kurdish Senior Hitler" desc="Manual how to lead Hitler to Kurdish people" imgs='imgs/5.jpg' vid='https://www.youtube.com/watch?v=YJAbjj_eE-A' vref="video/5"/>,
  <CardEx head="Turkey Uprising" desc="Attaturk will die and his son or smth will be in charge" imgs='imgs/6.jpg' vid='https://www.youtube.com/watch?v=s4Sg-WuaNWE' vref="video/6"/>,
  <CardEx head="Sword of Allah" desc="Five habibis vs British Emperie" imgs='imgs/7.jpg' vid='https://www.youtube.com/watch?v=avIwV-teIDM' vref="video/7"/>,
  <CardEx head="Independance Day" desc="Commie asian party at French Asian Sphere riots and then revolts" imgs='imgs/8.jpg' vid='https://www.youtube.com/watch?v=moRdztAsL9c' vref="video/8"/>,
  <CardEx head="Weeb asks other weebs if they are virgin" desc="IDK is it interesting or not but weeb asking other weebs on OMEGLE if they are virgin" imgs='imgs/9.jpg' vid='https://www.youtube.com/watch?v=mlUDKbFNB8k' vref="video/9"/>,
  <CardEx head="How to say step on me in japanese" desc="Weeb is teaching other weebs how to say something in japanese" imgs='imgs/10.jpg' vid='https://www.youtube.com/watch?v=hDgdG6f6F8I' vref="video/10"/>,
  <CardEx head="Weeb pretending to be JOJO in VRchat" desc="Hopeless weeb is trying to look like Jotaro" imgs='imgs/11.jpg' vid='https://www.youtube.com/watch?v=fouD_my1GFg' vref="video/11"/>,
  <CardEx head="The best game in Among Us" desc="Weeb plays perfectly in Among Us until he got caught because of some accident" imgs='imgs/12.jpg' vid='https://www.youtube.com/watch?v=Eyg5LAWzoW8&t' vref="video/12"/>
];

export default function Contentt(props) {
  const classes = useStyles();

  return (
      <Grid container="container" spacing={3} className={classes.ytarea}>
        {
          cards.map((card) => (<Grid item="item" key={card} xs={12} sm={6} md={3}>
            <Card className={classes.card} id={card}>
              {card}
            </Card>
          </Grid>))
        }
      </Grid>
    );
}
