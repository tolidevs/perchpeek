import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { IInitialState, Activity } from '../../redux/model'
import * as actions from '../../redux/actions'

import AddActivityModal, { AddActivityModalStateProps, AddActivityModalDispatchProps } from '../../Components/AddActivityModal/AddActivityModal'

export const mapStateToProps: MapStateToProps<AddActivityModalStateProps, {}, IInitialState> = state => {
    const { teamMember, teamMembers, activityID, addActivityModalIsOpen } = state
    return { teamMember, teamMembers, activityID, isOpen: addActivityModalIsOpen }
}

export const mapDispatchToProps: MapDispatchToProps<AddActivityModalDispatchProps, {}> = (dispatch) => ({
    onSubmit: (payload: Activity) => dispatch(actions.addActivity(payload)),
    onRequestClose: () => dispatch(actions.closeActivityModal())
})

export const AddActivityModalContainer = connect(mapStateToProps, mapDispatchToProps)(AddActivityModal)

export default AddActivityModalContainer