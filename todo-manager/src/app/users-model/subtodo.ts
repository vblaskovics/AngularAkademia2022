import { Progress } from "./progress-enum";
import { User } from "./user";

export interface Subtodo {
  id: number,
  title: string,
  status: Progress,
  details: string,
  creationDate: string,
  user: User
}
