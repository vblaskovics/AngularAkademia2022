import { Injectable } from '@angular/core';
import { USER } from '../Interfaces/user.interface';
import { mockUsers } from '../MockData';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: USER[];

  constructor() {
    this.users = mockUsers;
  }
}
