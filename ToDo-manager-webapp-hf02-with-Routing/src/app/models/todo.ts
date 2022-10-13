import { User } from "./user";

export enum progress {
    Open = 'Open',
    InProgress = 'In Progress',
    Done = 'Done',
  }

export interface Todo{
    id: number,
    title: string,
    progress: string, 
    description?: string,
    date: string,
    user_id?: User[],
    email?: string,
    subTodoIds?: Todo[],
    
    
}