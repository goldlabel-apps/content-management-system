import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Drawer,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core/';

import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appShell: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    border: `none`,
    boxShadow: `none`,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'none',
    padding: theme.spacing(3),
  },
}));

export default function AppShell(props) {
  const classes = useStyles();
  const {children} = props;
  

  return (
    <div className={classes.appShell}>
      <CssBaseline />
      <AppBar 
        position={`fixed`} 
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant={`h6`} noWrap>
            {`Title`}
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        anchor={`left`}
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
          <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon color={`primary`}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={`primary list text`} 
                    secondary={`secondary list text`} 
                  />
                </ListItem>
            </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
    </div>
  );
}
