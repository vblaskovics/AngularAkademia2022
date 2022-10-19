import { Progress } from "./progress";
import { SubTodo } from "./sub-todo";
import { User } from "./user";



export interface Todo {

  id: number,
  title: string,
  progress: Progress,
  description: string,
  date: string,
  userId: User,
  subTodo: SubTodo;

}
