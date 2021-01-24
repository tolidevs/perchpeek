import { initialList, teamMembers, client } from './initialState'
import { IInitialState } from './model'
import * as actions from './actions'

const initialState: IInitialState = { activities: initialList, client, activityID: 5, teamMember: teamMembers[0], teamMembers }

export const rootReducer = ( state: IInitialState = initialState, action: any ) => {
    switch (action.type) {
        case actions.ADD_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities,
                    action.payload
                ],
                activityId: ++state.activityID
            };
        default:
            return state;
    }
}

export default rootReducer