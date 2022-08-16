export enum progress {
  open = 'open',
  inProgress = 'in progress',
  done = 'done',
}

export interface Todo {
  id: number,
  title: string,
  progress: progress,
  description: string,
  date: string,
  user_id: number | string,
  subTodoIds?: Array<number>
}
