import React from 'react';

import { AppBar, InputBase, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      flexDirection: 'row',
      backgroundColor: theme.palette.background.default,
    },
    search: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
    },
    accountIcon: {
      color: theme.palette.text.secondary,
    },
    topBar: {
      width: '100%',
      display: 'flex',
      justifyContent: 'spaceBetween',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  })
);

export const TopBar: React.FC = () => {
  const classes = useStyles();

  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.topBar}>
          <div className={classes.search}>
            <div className={classes.searchIcon}><SearchIcon/></div>
            <InputBase placeholder="Search..." />
          </div>
          <AccountCircleOutlinedIcon className={classes.accountIcon}/>
        </Toolbar>
      </AppBar>   
  );
}

export default TopBar
