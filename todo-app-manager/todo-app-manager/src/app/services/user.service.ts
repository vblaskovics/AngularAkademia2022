import { Injectable } from '@angular/core';
import { users } from '../database/user-db';
import { User } from '../users-model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[];
  constructor() {

    this.users = users

   }

  getUsers() {
    return this.users
  }
}
