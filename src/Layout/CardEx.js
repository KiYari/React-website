import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import cards from './Content';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    display: 'flex'
  },
  cardContent: {}
}));

export default function CardEx(props) {
  const classes = useStyles();

  function handleClick() {
    window.location.reload();
  }

  return (
    <div>
    <Link to={{
        pathname: props.vref,
        state: {
          vid: props.vid,
          shead: props.head,
          sdesc: props.desc,
        }
      }}>
      <CardActionArea onClick={() => {
          setTimeout("window.location.reload()", 1);
        }}>
        <CardMedia className={classes.cardMedia} image={props.imgs} title="Image title" onclick="handleClick()"/>
      </CardActionArea>
    </Link>
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
        {props.head}
      </Typography>
      <Typography>
        {props.desc}
      </Typography>
    </CardContent>
  </div>);
}
