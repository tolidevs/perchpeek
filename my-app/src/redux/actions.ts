import { Activity } from './model'

export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const addActivity = (payload: Activity) => ({
    type: ADD_ACTIVITY,
    payload,
})

export const OPEN_ACTIVITY_MODAL = 'OPEN_ACTIVITY_MODAL'
export const openActivityModal = () => ({
    type: OPEN_ACTIVITY_MODAL
})

export const CLOSE_ACTIVITY_MODAL = 'CLOSE_ACTIVITY_MODAL'
export const closeActivityModal = () => ({
    type: CLOSE_ACTIVITY_MODAL
})