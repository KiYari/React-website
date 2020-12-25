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
import UrlButton from './urlButton'
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    display: 'flex'
  },
  cardContent: {}
}));

export default function VideoComponent(props) {
  const classes = useStyles();
  console.log(props.head)
  function handleClick() {
    window.location.reload();
  }

  return (
    <Grid container="container" spacing={3}>
      <Grid item="item">
        <ReactPlayer className={classes.ytarea} url={props.vid}/>
        <Grid container="container" spacing={3}>
          <Grid item="item" xs={12}>
            <Typography gutterBottom="gutterBottom" variant="h5" component="h2">
              {props.head}<br/>
            </Typography>
          </Grid>
          <Grid item="item" xs={6}>
            <Typography>
              {props.desc}
            </Typography>
          </Grid>
          <UrlButton urls={props.vid}/>
        </Grid>
      </Grid>
    </Grid>);
}
