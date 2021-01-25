
export interface IInitialState {
    activities: Activity[],
    client: User,
    activityID: number,
    teamMember: User
    teamMembers: User[]
    addActivityModalIsOpen: boolean;
}

export interface Activity {
    id: number;
    type: ActivityType,
    propertyURL?: string;
    notes: string;
    teamMember?: User;
}

export enum ActivityType {
    note = 'note',
    enquiry = 'property enquiry',
    task = 'task'
}
export interface User {
    id: number,
    name: string,
    email?: string,
}