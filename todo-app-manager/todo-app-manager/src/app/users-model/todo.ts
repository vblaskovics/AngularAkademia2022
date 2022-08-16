import { Progress } from "./progress";

export interface Todo {

  id: number,
  title: string,
  progress: Progress,
  description: string,
  date: string,
  userId: number,
  subTodoIds: number[]

}
