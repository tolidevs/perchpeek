import { act, fireEvent, render } from '../../test-utils'
import { initialList, teamMembers } from '../../redux/initialState'

import TabPanel, {TabPanelOwnProps} from './TabPanel'

const props: TabPanelOwnProps = {
    onAddActivity: jest.fn(),
    activities: initialList,
    teamMember: teamMembers[0]
}

const { getByTestId } = render(<TabPanel {...props} />)

describe('activities list', () => {
    it('should render a list of all the activities and the add activity button', () => {
        expect(getByTestId('activitiesList').childElementCount).toBe(props.activities.length)
    })
})

describe('add activity button', () => {
    beforeAll(() => {
        void act(() => {
            fireEvent.click(getByTestId('plusButton'))
        })
    })
    describe('when the add activity button is pressed', () => {
        it('should fire the onAddActivity handler to open the modal', () => {
            expect(props.onAddActivity).toHaveBeenCalledTimes(1)
        })
    })
    
})