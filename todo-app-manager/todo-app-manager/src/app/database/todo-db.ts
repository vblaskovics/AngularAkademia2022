import { Progress } from '../users-model/progress';
import { Todo } from '../users-model/todo';

export const todos: Todo[] = [
  {
    id: 1,
    title: 'hehehe',
    progress: Progress.IN_PROGRESS,
    description: 'HEHEHEHE',
    date: '2022-08-17',
    userId: 1,
    subTodoIds: [],
  },
  {
    id: 2,
    title: 'hahaha',
    progress: Progress.OPEN,
    description: 'HAHAHAHA',
    date: '2022-08-03',
    userId: 2,
    subTodoIds: [],
  },

  {
    id: 3,
    title: 'hihihi',
    progress: Progress.DONE,
    description: 'HIHIHIHI',
    date: '2021-08-19',
    userId: 3,
    subTodoIds: [],
  },

  {
    id: 4,
    title: 'hohoho',
    progress: Progress.IN_PROGRESS,
    description: 'HOHOHOHO',
    date: '2020-11-23',
    userId: 1,
    subTodoIds: [],
  },

  {
    id: 5,
    title: 'huhuhu',
    progress: Progress.DONE,
    description: 'HUHUHUHU',
    date: '2022-01-06',
    userId: 2,
    subTodoIds: [],
  }
];
