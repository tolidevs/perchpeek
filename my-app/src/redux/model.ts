
export interface IInitialState {
    activities: Activity[],
    client: User,
    activityID: number,
    teamMember: User
    teamMembers: User[]
}
export type Activity = Note | Task

export interface Note {
    id: number;
    type: ActivityType,
    propertyURL?: string;
    notes: string;
}

export enum ActivityType {
    note = 'note',
    enquiry = 'property enquiry',
    task = 'task'
}

export interface Task extends Note {
    teamMember: User;
}

export interface User {
    id: number,
    name: string,
    email?: string,
}