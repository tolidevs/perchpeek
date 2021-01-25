import { initialList, teamMembers, client } from './initialState'
import { IInitialState } from './model'
import * as actions from './actions'

const initialState: IInitialState = { activities: initialList, client, activityID: 5, teamMember: teamMembers[0], teamMembers, addActivityModalIsOpen: true }

export const rootReducer = ( state: IInitialState = initialState, action: any ) => {
    switch (action.type) {
        case actions.ADD_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities,
                    action.payload
                ],
                addActivityModalIsOpen: false,
                activityId: ++state.activityID
            };
        case actions.OPEN_ACTIVITY_MODAL:
            return {
                ...state,
                addActivityModalIsOpen: true
            };
        case actions.CLOSE_ACTIVITY_MODAL:
            return {
                ...state,
                addActivityModalIsOpen: false
            }
        default:
            return state;
    }
}

export default rootReducer