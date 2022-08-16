export interface Todo {

  id: number,
  title: string,
  progress: string,
  description: string,
  date: string,
  userId: number,
  subTodoIds?: number[]

}
