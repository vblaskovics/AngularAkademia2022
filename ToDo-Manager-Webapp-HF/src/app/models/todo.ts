import { Details } from "./details";
import { User } from "./user";

export interface Todo {
    id: number,
    title: string,
    progress: string, 
    description: string,
    date: string,
    user_id?: User[],
    subTodoIds?: Todo[],
    email?: string,
}