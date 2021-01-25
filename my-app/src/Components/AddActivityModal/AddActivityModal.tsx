import React, { useCallback, useState } from 'react'
import { Activity, User, ActivityType } from '../../redux/model'

import { 
    Modal, 
    Card, 
    CardHeader, 
    CardContent, 
    CardActions, 
    IconButton, 
    FormControl, 
    Button, 
    MenuItem, 
    Select, 
    InputLabel, 
    TextField } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

export interface AddActivityModalStateProps {
    teamMember: User
    teamMembers: User[], 
    activityID: number,
    isOpen: boolean,
}

export interface AddActivityModalDispatchProps {
    onSubmit: (payload: Activity) => void;
    onRequestClose: () => void;
}

export type AddActivityModalOwnProps = AddActivityModalDispatchProps & AddActivityModalStateProps

export const AddActivityModal: React.FC<AddActivityModalOwnProps> = ( props ) => {
    const { teamMember, teamMembers, activityID, isOpen, onSubmit, onRequestClose } = props

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            modal: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            box: {
                width: '50%',
                padding: theme.spacing(1)
            },
            paper: {
                position: 'absolute',
                width: '50%',
                backgroundColor: theme.palette.background.paper,
                border: '2px solid #000',
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2),
            },
            formControl: {
                margin: theme.spacing(1),
                width: '50%',
            },
            textArea: {
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(2),
                width: '100%',
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
            submit: {
                margin: theme.spacing(2)
            }
        }),
    );
    const classes = useStyles();

    const blankActivity: Activity = {
        id: activityID,
        type: ActivityType.note,
        propertyURL: undefined,
        notes: '',
        assignee: undefined
    }
    
    const [activityState, setActivity] = useState({...blankActivity})

    const handleChange = (event: React.ChangeEvent<{ name?: string, value: any}>) => {
        const name = event.target.name as keyof typeof activityState;
        setActivity({
            ...activityState,
            [name]: event.target.value
        });
    }

    const handleChangeAssignee = (event: React.ChangeEvent<{ value: any}>)=> {
        const assignee = teamMembers.find( teamMember => teamMember.id === event.target.value )
        setActivity({
            ...activityState,
            assignee
        })
    }

    const submitDisabled = !activityState.id || !activityState.type || !activityState.notes

    const handleSubmit = useCallback(() => {
        if (!submitDisabled) onSubmit(activityState)
        setActivity(blankActivity)
    }, [onSubmit, setActivity, blankActivity, activityState, submitDisabled])

    return (
        <Modal
            className={classes.modal}
            open={isOpen}
            onClose={() => onRequestClose}
            data-testid='addActivityModal'
        >
            <Card className={classes.box}>
                <CardHeader
                    action={
                    <IconButton onClick={onRequestClose}>
                        <CloseIcon />
                    </IconButton>
                    }
                    title='Add Activity'
                />
                <CardContent>
                    <FormControl variant="outlined" className={classes.formControl} required>
                        <InputLabel id="ActivityType">Add activity</InputLabel>
                        <Select
                            value={activityState?.type}
                            onChange={handleChange}
                            name="type"
                            className={classes.selectEmpty}
                        >
                            {Object.keys(ActivityType).map( type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                        </Select>
                    </FormControl>

                    {activityState.type === ActivityType.task && (
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="Assignee">Select team member</InputLabel>
                            <Select
                                value={activityState?.assignee}
                                onChange={handleChangeAssignee}
                                name="assignee"
                                className={classes.selectEmpty}
                            >
                                {teamMembers.filter( user => user !== teamMember).map( teamMember => <MenuItem value={teamMember.id}>{`${teamMember.name} - ${teamMember.email}`}</MenuItem>)}
                            </Select>
                        </FormControl>
                    )}

                    <FormControl className={classes.formControl}>
                        <TextField
                            id="PropertyUrl"
                            variant="outlined" 
                            value={activityState?.propertyURL}
                            onChange={handleChange}
                            name="propertyURL"
                            label='Add property URL (optional)'
                        />
                    </FormControl>

                    <FormControl className={classes.textArea}>
                        <TextField
                            id="Notes"
                            variant="outlined" 
                            value={activityState?.notes}
                            onChange={handleChange}
                            name="notes"
                            label='Add notes...'
                            multiline={true}
                            rows='5'
                            required
                        />
                    </FormControl>

                </CardContent>
                <CardActions>
                    <Button className={classes.submit} variant="contained" color="secondary" disabled={submitDisabled} onClick={() => handleSubmit()}>
                        Submit
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    )
}

export default AddActivityModal