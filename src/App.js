import React from 'react';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Contentt from './Layout/Content'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    display: 'flex',
  },
  cardContent: {
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Contentt>
      <CardActionArea>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      </CardActionArea>
      <Grid item>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Heading
        </Typography>
        <Typography>
          Description
        </Typography>
      </CardContent>
      <CardActions className={classes.cardContent}>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
      </Grid>
      </Contentt>
      <Footer />
    </React.Fragment>
  );
}
