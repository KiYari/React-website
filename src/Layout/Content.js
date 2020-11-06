import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  gridbox: {

  },
  cardGrid: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  card: {
    width: '105%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Contentt(props) {
  const classes = useStyles();

  return (
    <main>
      {/* Hero unit */}
      <Container className={classes.cardGrid}>
        {/* End hero unit */}
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                {props.children}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
