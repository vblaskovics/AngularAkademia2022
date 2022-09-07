import { Injectable } from '@angular/core';
import { progress, Todo } from '../models/todo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todos: Todo[] = [
    {
      id: 1,
      title: 'write a message',
      progress: progress.done,
      description: 'later',
      date: '2022-08-12',
      user_id: 91,
      subTodoIds: [],
    },
    {
      id: 2,
      title: 'read all messages',
      progress: progress.inProgress,
      description: 'later',
      date: '2022-08-15',
      user_id: 92,
      subTodoIds: [],
    },
    {
      id: 3,
      title: 'send an email',
      progress: progress.done,
      description: 'later',
      date: '2022-08-14',
      user_id: 93,
      subTodoIds: [],
    },
    {
      id: 4,
      title: 'read a manual',
      progress: progress.inProgress,
      description: 'later',
      date: '2022-08-21',
      user_id: 93,
      subTodoIds: [],
    },
    {
      id: 5,
      title: 'write a manual',
      progress: progress.open,
      description: 'later',
      date: '2022-08-30',
      user_id: 91,
      subTodoIds: [11, 12, 13],
    },
  ];

  users: User[] = [
    { id: 91, name: 'Adam Smith', email: 'a@s.com' },
    { id: 92, name: 'Mary Jones', email: 'm@j.com' },
    { id: 93, name: 'Charlie Big', email: 'ch@b.com' }
  ];

  subTodos: Todo[] = [
    {
      id: 11,
      title: 'write a draft',
      progress: progress.open,
      description: 'later',
      date: '2022-08-20',
      user_id: 91,
    },
    {
      id: 12,
      title: 'correct mistakes',
      progress: progress.open,
      description: 'later',
      date: '2022-08-25',
      user_id: 91,
    },
    {
      id: 13,
      title: 'finalize document',
      progress: progress.open,
      description: 'later',
      date: '2022-08-30',
      user_id: 91,
    },
    {
      id: 14,
      title: 'another misc subtodo',
      progress: progress.open,
      description: 'later',
      date: '2022-08-30',
      user_id: 91,
    },
  ];

  constructor() { }



}
