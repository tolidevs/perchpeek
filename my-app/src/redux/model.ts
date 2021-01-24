
export interface InitialState {
    activities: Activity[],
    client: User,
    activityID: number,
    teamMember: User
    teamMembers: User[]
}
export type Activity = Note | Task

export interface Note {
    id: number;
    propertyURL?: string;
    notes: string;
}

export interface Task extends Note {
    teamMember: User;
}

export interface User {
    id: number,
    name: string,
    email?: string,
}