import { Progress } from '../models/progress';
import { Todo } from '../models/todo';
import { users } from './user-db';
import { subTodos } from './subtodo-db';


export const todos: Todo[] = [
  {
    id: 1,
    title: 'hehehe',
    progress: Progress.IN_PROGRESS,
    description: 'HEHEHEHE',
    date: '2022-08-17',
    userId: users[0],
    subTodo: subTodos[10],
  },
  {
    id: 2,
    title: 'hahaha',
    progress: Progress.OPEN,
    description: 'HAHAHAHA',
    date: '2022-08-03',
    userId: users[1],
    subTodo: subTodos[1],
  },

  {
    id: 3,
    title: 'hihihi',
    progress: Progress.DONE,
    description: 'HIHIHIHI',
    date: '2021-08-19',
    userId: users[2],
    subTodo: subTodos[2],
  },

  {
    id: 4,
    title: 'hohoho',
    progress: Progress.IN_PROGRESS,
    description: 'HOHOHOHO',
    date: '2020-11-23',
    userId: users[1],
    subTodo: subTodos[1],
  },

  {
    id: 5,
    title: 'huhuhu',
    progress: Progress.DONE,
    description: 'HUHUHUHU',
    date: '2022-01-06',
    userId: users[0],
    subTodo: subTodos[0],
  }
];
