import React from 'react'
import { Box, List, IconButton, Typography } from '@material-ui/core'

import { Activity, User } from '../../redux/model'
import ActivityItem from '../ActivityItem/ActivityItem'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';



export interface TabPanelDispachProps {
    onAddActivity: () => void;
}
export interface TabPanelStateProps {
    activities: Activity[],
    teamMember: User
} 

export type TabPanelOwnProps = TabPanelStateProps & TabPanelDispachProps

export const TabPanel: React.FC<TabPanelOwnProps> = ( props ) => {
    const { activities, teamMember, onAddActivity } = props

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            tabPanel: {
                backgroundColor: 'white'
            },
            addActivity: {
                paddingTop: theme.spacing(2),
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }
        })
    )
    const classes = useStyles()

    const activitiesList = activities.map(activity => {
        return <ActivityItem key={activity.id} activity={activity} teamMember={teamMember} />
    })

    return (
        <div role='tabpanel'>
            <Box className={classes.tabPanel}>
                <div className={classes.addActivity}>
                    <IconButton onClick={onAddActivity}>
                        <AddCircleIcon color='secondary' fontSize='large' />
                    </IconButton>
                    <Typography variant='h6' >
                        Add a new activity
                    </Typography>
                </div>
                <List>
                    {activitiesList}
                </List>
            </Box>
        </div>
    )
}

export default TabPanel