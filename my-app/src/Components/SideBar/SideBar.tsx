import React from 'react';

import { Divider, Drawer, List, ListSubheader, ListItem, ListItemText, Typography } from '@material-ui/core'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: theme.palette.primary.main,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.palette.info.main,
            color: 'white'
        },
        subHeader: {
            color: 'lightGrey',
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
        sideItem: {
            padding: theme.spacing(2),
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar ,
    }),
);

export const SideBar: React.FC = () => {
    const classes = useStyles();

    return (
        <div data-testid="sideBar">
            <nav className={classes.drawer}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar}>
                    <Typography variant='h5' className={classes.sideItem}>
                        PerchPeek
                    </Typography>  
                    </div>
                    <Divider />               
                    <Typography className={classes.sideItem}>
                        Overview
                    </Typography>
                    <Divider />
                    <List>
                        <ListSubheader className={classes.subHeader}>{'Manage'}</ListSubheader>
                        {['Users', 'Properties', 'Viewings', 'Support'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <ListSubheader className={classes.subHeader}>{'Get Help'}</ListSubheader>
                        <ListItem button key={'Knowledge Base'}>
                            <ListItemText primary={'Knowledge Base'} />
                        </ListItem>
                    </List> 
                </Drawer>
            </nav>
        </div>
    )
}

export default SideBar