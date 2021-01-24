import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import TopBar from './Components/TopBar/TopBar'
import SideBar from './Components/SideBar/SideBar'
import TabBar from './Components/TabBar/TabBar'

import UserCardContainer from './Containers/UserCardContainer/UserCardContainer'
import TabPanelContainer from './Containers/TabPanelContainer/TabPanelContainer'

import { CssBaseline } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const App: React.FC = () => {

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(5),
    },
  }))

  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Router>
      <div className={classes.root}>
      <CssBaseline />
        <TopBar/>
        <SideBar/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
   
          <UserCardContainer />
          <TabBar />
          <TabPanelContainer />
        </main>
      </div>
    </Router>
  );
}

export default App;
