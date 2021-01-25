import React from 'react';
import { User } from '../../redux/model'

import { Typography, Avatar } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export type UserCardStateProps = User
export type UserCardOwnProps = UserCardStateProps

export const UserCard: React.FC<UserCardOwnProps> = ( props ) => {
    const { name } = props
    const clientName = name

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            card: {
                border: '2px solid lightGrey',
                borderRadius: '5px',
                width: '60%',
                padding: theme.spacing(1, 2),
                display: 'flex',
                justifyContent: 'spaceBetween',
                alignItems: 'center',
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(3),
            },
            text: {
                flexGrow: 1
            },
            accountIcon: {
                marginRight: theme.spacing(3),
                marginLeft: theme.spacing(2),
                fontSize: '60px'
            },
            link: {
                textDecoration: 'none'
            },
            avatar: {
                backgroundColor: theme.palette.primary.main
            }
        }))

    const classes = useStyles()

    return(
        <div aria-label="User card" data-testid='userCard'>
            <Typography variant="h3" component="h2">{clientName}</Typography>
            <div className={classes.card}>
                <AccountCircleOutlinedIcon className={classes.accountIcon} />
                <Typography variant='h4' className={classes.text}>
                    Moving to <a className={classes.link} target='_blank' rel="noreferrer" href='https://www.google.com/maps/place/Shelbyville,+IN+46176,+USA/@39.5468955,-85.843844,12z/data=!3m1!4b1!4m5!3m4!1s0x886b174c59ad519f:0xc4d97b9e3f5789c6!8m2!3d39.5214373!4d-85.7769238'>Shelbyville, USA</a>
                </Typography>
                <Avatar className={classes.avatar}>
                    <KeyboardArrowDownIcon />
                </Avatar>
            </div>
        </div>
    )
}

export default UserCard