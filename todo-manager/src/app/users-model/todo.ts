import { Progress } from "./progress-enum";

export interface Todo {
  id: number,
  title: string,
  progress: Progress,
  description: string,
  date: string,
  userId: number,
  subTodoIds: number[]
}
