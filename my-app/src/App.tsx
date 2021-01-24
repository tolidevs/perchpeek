import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import TopBar from './Components/TobBar/TopBar'
import SideBar from './Components/SideBar/SideBar'
// import UserCard from './Components/UserCard/UserCard'
import UserCardContainer from './Containers/UserCardContainer/UserCardContainer'

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
          {/* <UserCard/> */}
          <UserCardContainer/>
        </main>
      </div>
    </Router>
  );
}

export default App;
