import { Activity } from './model'

export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const addActivity = (content: Activity) => ({
    type: ADD_ACTIVITY,
    payload: content,
})