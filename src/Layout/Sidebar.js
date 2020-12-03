import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {IconButton} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles({
  icon: {
    marginRight: '10px',
    width: '64px',
    height: '64px',
    color: 'white'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({top: false, left: false, bottom: false, right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({
      ...state,
      [anchor]: open
    });
  };

  const list = (anchor) => (<div className={clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom'
    })} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
    <List>
      {
        ['Home', 'Trending', 'Subscriptions'].map((text, index) => (<ListItem button="button" key={text}>
          <ListItemIcon>{
              index == 0
                ? <HomeIcon/>
                : index == 1
                  ? <WhatshotIcon/>
                  : <SubscriptionsIcon/>
            }</ListItemIcon>
          <ListItemText primary={text}/>
        </ListItem>))
      }
    </List>
    <Divider/>
    <List>
      {
        ['Library', 'History', 'Watch later', 'Liked videos'].map((text, index) => (<ListItem button="button" key={text}>
          <ListItemIcon>{
              index == 0
                ? <VideoLibraryIcon/>
                : index == 1
                  ? <HistoryIcon/>
                  : index == 2
                    ? <WatchLaterIcon/>
                    : <ThumbUpIcon/>
            }</ListItemIcon>
          <ListItemText primary={text}/>
        </ListItem>))
      }
    </List>
  </div>);

  return (<div>
    <React.Fragment key={'left'}>
      <IconButton className={classes.icon} onClick={toggleDrawer('left', true)}><Menu/></IconButton>
      <SwipeableDrawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
        {list('left')}
      </SwipeableDrawer>
    </React.Fragment>
  </div>);
}
