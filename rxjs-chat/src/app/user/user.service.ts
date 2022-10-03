import { User } from './user.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  currentUser: Subject<User> = new BehaviorSubject<User>(new User());
  // BS-ként példányosítjuk - hogy lementse magában és bármikor adja át a cU-t.

  setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser); // ez az átváltó a reaktív világra.
    // Ha nem csináljuk meg ezt az event pontot, akkor ezt a sort kell mindig meghívni
  }
}
