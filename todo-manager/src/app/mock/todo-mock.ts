import { Progress } from '../users-model/progress-enum';
import { Todo } from '../users-model/todo';

export const todos: Todo[] = [
  {
    id: 1,
    title: 'write an email',
    progress: Progress.OPEN,
    description: 'I need to write some email',
    date: '2022-10-01',
    userId: 1,
    subTodoIds: [],
  },
  {
    id: 2,
    title: 'do sport',
    progress: Progress.IN_PROGRESS,
    description: 'go to the gym',
    date: '2022-10-03',
    userId: 2,
    subTodoIds: [],
  },

  {
    id: 3,
    title: 'play LOL',
    progress: Progress.DONE,
    description: 'I need to practice to be a good mid laner',
    date: '2022-10-06',
    userId: 3,
    subTodoIds: [],
  },

  {
    id: 4,
    title: 'bake cookies',
    progress: Progress.IN_PROGRESS,
    description: 'make some several type of flavour',
    date: '2022-10-04',
    userId: 1,
    subTodoIds: [],
  },

  {
    id: 5,
    title: 'practice Angular',
    progress: Progress.OPEN,
    description: 'I need to practice Angular',
    date: '2022-10-09',
    userId: 2,
    subTodoIds: [],
  }
];
