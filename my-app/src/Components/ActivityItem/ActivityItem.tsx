import React from 'react';
import { Activity, User } from '../../redux/model'

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface ActivityItemProps {
    activity: Activity,
    teamMember: User
}

export const ActivityItem: React.FC<ActivityItemProps> = ( props ) => {
    const { activity, teamMember } = props

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            border: '1px solid lightGrey',
            borderRadius: '5px',
            marginTop: theme.spacing(1)
        }
    })
)
const classes = useStyles()

    const initials = teamMember.name.split(' ').map(name => name[0]).join('')

    return(
        <ListItem className={classes.listItem} >
            <ListItemAvatar>
            <Avatar>
                {initials}
            </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={`${teamMember.name} added a ${activity.type}`}
                secondary={`${activity.notes}`}
            />
        </ListItem>
    )
}

export default ActivityItem
