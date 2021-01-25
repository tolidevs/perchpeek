import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import * as actions from '../../redux/actions'
import { IInitialState } from '../../redux/model'

import TabPanel, { TabPanelStateProps, TabPanelDispachProps } from '../../Components/TabPanel/TabPanel'

export const mapStateToProps: MapStateToProps<TabPanelStateProps, {}, IInitialState> = state => {
    const { activities, teamMember } = state
    return { activities, teamMember }
}

export const mapDispatchToProps: MapDispatchToProps<TabPanelDispachProps, {}> = (dispatch) => ({
    onAddActivity: () => dispatch(actions.openActivityModal())
})

export const TabPanelContainer = connect(mapStateToProps, mapDispatchToProps)(TabPanel)

export default TabPanelContainer