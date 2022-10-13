import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  currentUser: Subject<User> = new BehaviorSubject<User>(new User()); 

  public setCurrentUser(newUser: User): void{
    this.currentUser.next(newUser) //reactive method 
  }
}
