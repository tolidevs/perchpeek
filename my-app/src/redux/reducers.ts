import { initialList, teamMembers, client } from './initialState'
import { InitialState } from './model'
import * as actions from './actions'

const initialState: InitialState = { activities: initialList, client, activityID: 5, teamMember: teamMembers[0], teamMembers }

const rootReducer = ( state = initialState, action: any ) => {
    switch (action.type) {
        default:
            return state;
        case actions.ADD_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities,
                    action.payload
                ],
                activityId: ++state.activityID
            }
    }
}

export default rootReducer