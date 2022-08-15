export enum Progress {
  open = 'open',
  in_progress = 'in progress',
  done = 'done',
}

export interface Todo {
  id?: number;
  title?: string;
  progress?: string;
  description?: string;
  date?: string;
  user_id?: number;
  subTodoIds?: Todo[];
}
