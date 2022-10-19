import { Progress } from '../models/progress';
import { SubTodo } from '../models/sub-todo';
import { users } from './user-db';

export const subTodos: SubTodo[] = [
  {
    id: 1,
    title: 'subhahaha',
    status: Progress.IN_PROGRESS,
    details: 'SUBHAHAHA',
    creationDate: '2022-12-21',
    user: users[0],
  },

  {
    id: 2,
    title: 'subhehehe',
    status: Progress.DONE,
    details: 'SUBHEHEHE',
    creationDate: '2022-07-05',
    user: users[1],
  },

  {
    id: 3,
    title: 'subhihihi',
    status: Progress.OPEN,
    details:
      'SUBHIHIHI',
    creationDate: '2021-09-06',
    user: users[2],
  },
];
