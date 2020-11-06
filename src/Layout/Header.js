import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './Nav'
import Sidebar from './Sidebar'
import SwipeableTemporaryDrawer from './Sidebar';
import toggleDrawer from './Sidebar';
import list from './Sidebar';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    width: '64px',
    height: '64px',
    color: 'white',
  },
  ytarea: {
    display: 'block',
    color: 'white',
  },
}));

export default function Header () {
  const classes = useStyles();

  return(
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <Sidebar />
        <IconButton color='secondary' disableRipple="inherit" className={classes.ytarea}>
          <YouTubeIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Ты Труба
          </Typography>
        </IconButton>
          <Nav />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
