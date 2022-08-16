import { Progress } from "./progress";
import { User } from "./user";

export interface SubTodo {

  id: number,
  title: string,
  status: Progress,
  details: string,
  creationDate: string,
  user: User
  
}
