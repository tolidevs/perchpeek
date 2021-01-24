import React from 'react'
import { Box, List } from '@material-ui/core'

import { Activity, User } from '../../redux/model'
import ActivityItem from '../ActivityItem/ActivityItem'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';



export interface TabPanelStateProps {
    activities: Activity[],
    teamMember: User
} 

export type TabPanelOwnProps = TabPanelStateProps

export const TabPanel: React.FC<TabPanelOwnProps> = ( props ) => {
    const { activities, teamMember } = props

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            tabPanel: {
                backgroundColor: 'white'
            },
        })
    )
    const classes = useStyles()

    const activitiesList = activities.map(activity => {
        return <ActivityItem key={activity.id} activity={activity} teamMember={teamMember} />
    })

    return (
        <div role='tabpanel'>
            <Box className={classes.tabPanel}>
                <List>
                    {activitiesList}
                </List>
            </Box>
        </div>
    )
}

export default TabPanel