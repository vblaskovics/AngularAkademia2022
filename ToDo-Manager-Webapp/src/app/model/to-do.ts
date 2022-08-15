export interface ToDo {
  id: number;
  title: string;
  progress: 'open' | 'in progress' | 'done';
  description: string;
  date: Date;
  user_id: number;
  subTodoIds: number[];
}
