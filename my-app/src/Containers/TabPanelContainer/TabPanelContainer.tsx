import { connect, MapStateToProps } from 'react-redux';
import { IInitialState } from '../../redux/model'

import TabPanel, { TabPanelStateProps } from '../../Components/TabPanel/TabPanel'

export const mapStateToProps: MapStateToProps<TabPanelStateProps, {}, IInitialState> = state => {
    const { activities, teamMember } = state
    return { activities, teamMember }
}

export const TabPanelContainer = connect(mapStateToProps)(TabPanel)

export default TabPanelContainer