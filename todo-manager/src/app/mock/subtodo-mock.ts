import { Progress } from '../users-model/progress-enum';
import { Subtodo } from '../users-model/subtodo';
import { users } from './user-mock';

export const subTodos: Subtodo[] = [
  {
    id: 1,
    title: 'This is a subdetail',
    status: Progress.OPEN,
    details: 'email writing for: boss, friend, colleauge etc.',
    creationDate: '2022-09-28',
    user: users[0],
  },

  {
    id: 2,
    title: 'This is a subdetail',
    status: Progress.DONE,
    details: 'run 5 km',
    creationDate: '2022-10-03',
    user: users[1],
  },

  {
    id: 3,
    title: 'This is a subdetail',
    status: Progress.IN_PROGRESS,
    details:
      'Heimerdinger, Ahri etc. are good characters and I will play with them',
    creationDate: '2022-10-06',
    user: users[2],
  },
];
