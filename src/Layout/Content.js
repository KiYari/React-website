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
  cardGrid: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
    marginRight: theme.spacing(4)
  },
  card: {
    width: '105%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  ytarea: {
    marginTop: theme.spacing(8)
  }
}));

const cards = [
  <CardEx head="Outward" desc="Big desert cooking simulator" imgs='imgs/1.jpg'/>,
  <CardEx head="Recettear" desc="Capitalism in action on small kid labour" imgs='imgs/2.jpg'/>,
  <CardEx head="Endless Space 2" desc="Capitalism in action but in space and with big alien mommy" imgs='imgs/3.jpg'/>,
  <CardEx head="Total Annihilation Kingdoms" desc="Shared suffering with siblings or smth like that idk" imgs='imgs/4.jpg'/>,
  <CardEx head="Kurdish Senior Hitler" desc="Manual how to lead Hitler to Kurdish people" imgs='imgs/5.jpg'/>,
  <CardEx head="Turkey Uprising" desc="Attaturk will die and his son or smth will be in charge" imgs='imgs/6.jpg'/>,
  <CardEx head="Sword of Allah" desc="Five habibis vs British Emperie" imgs='imgs/7.jpg'/>,
  <CardEx head="Independance Day" desc="Commie asian party at French Asian Sphere riots and then revolts" imgs='imgs/8.jpg'/>,
  <CardEx head="Weeb asks other weebs if they are virgin" desc="IDK is it interesting or not but weeb asking other weebs on OMEGLE if they are virgin" imgs='imgs/9.jpg'/>,
  <CardEx head="How to say step on me in japanese" desc="Weeb is teaching other weebs how to say something in japanese" imgs='imgs/10.jpg' vid='https://www.youtube.com/watch?v=hDgdG6f6F8I'/>,
  <CardEx head="Weeb pretending to be JOJO in VRchat" desc="Hopeless weeb is trying to look like Jotaro" imgs='imgs/11.jpg'/>,
  <CardEx head="The best game in Among Us" desc="Weeb plays perfectly in Among Us until he got caught because of some accident" imgs='imgs/12.jpg'/>
];

export default function Contentt(props) {
  const classes = useStyles();

  return (<main>
    {/* Hero unit */}
    <Container className={classes.cardGrid}>
      {/* End hero unit */}
      <Grid container="container" spacing={3}>
        {
          cards.map((card) => (<Grid className={classes.ytarea} item="item" key={card} xs={12} sm={6} md={3}>
            <Card className={classes.card} id={card}>
              {card}
            </Card>
          </Grid>))
        }
      </Grid>
    </Container>
  </main>);
}
