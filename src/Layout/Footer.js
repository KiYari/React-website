import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Ты Труба
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Footer() {
  const classes = useStyles();

  return(
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Ты Труба Inc.
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        We love everyone, except for people who post hot anime tights posts during NNN
      </Typography>
      <Copyright />
    </footer>
  );
}
