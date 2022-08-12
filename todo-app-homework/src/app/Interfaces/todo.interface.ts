import { progress } from "../progress"

export interface TODO {
    id:number,
    title:string,
    progress:progress
    description?:string,
    date:string,
    user_id:number,
    subTodoIds?:number[]
}
