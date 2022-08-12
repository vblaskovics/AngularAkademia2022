
import { TODO } from './Interfaces/todo.interface';
import { USER } from './Interfaces/user.interface';
import {progress} from './progress'

export const mockUsers: USER[] = [
    {
        id: 1,
        name: 'Elon Musk',
        email: 'elon.musk@gmail.com',
    },
    {
        id: 2,
        name: 'Jeff Bezos',
        email: 'jeff.bezos@gmail.com',
    },
    {
        id: 3,
        name: 'Bernard Arnault',
        email: 'bernard.arnault@gmail.com',
    },
];

export const mockTodos: TODO[] = [
    {
        id: 1,
        title: 'Skype with mom',
        progress: progress.done,
        description: 'go to yoga class at 2:00pm',
        date: '2022-08-01',
        user_id: 1,
    },

    {
        id: 2,
        title: 'First Milk',
        progress: progress.done,

        date: '2022-08-02',
        user_id: 2,
    },
    {
        id: 3,
        title: 'Second cereal',
        progress: progress.done,
        description: '',
        date: '2022-08-02',
        user_id: 2,
    },
    {
        id: 4,
        title: 'Eat bowl of cereal',
        progress: progress.open,

        date: '2022-08-02',
        user_id: 2,
        subTodoIds: [2, 3],
    },
    {
        id: 5,
        title: 'Yoga Class',
        progress: progress.inProgress,

        date: '2022-08-02',
        user_id: 1,
    },
    {
        id: 6,
        title: 'Buy Milk',
        progress: progress.done,

        date: '2022-08-02',
        user_id: 3,
    },
    {
        id: 7,
        title: 'Buy Eggs',
        progress: progress.open,

        date: '2022-08-02',
        user_id: 3,
    },
    {
        id: 8,
        title: 'Go to Supermarket',
        progress: progress.open,
        description:'Aldi',
        date: '2022-08-02',
        user_id: 3,
        subTodoIds:[6,7]
    },
];
