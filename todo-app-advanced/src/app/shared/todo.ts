import { Users } from "./users";

 export enum progress {
  Open = 'Open',
  In_Progress = 'In Progress',
  Done = 'Done',
}

export interface Todo {
  id: number,
  title: string,
  progress: progress,
  description: string,
  date: string,
  user_id?: Users[],
  subTodos?: Todo[],
}
