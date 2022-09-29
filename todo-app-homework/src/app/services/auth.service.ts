import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //user = '';
  userIsLogedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {
    this.isLoggedIn();
  }
  login(username: string, password: string) {
    if (username == 'user' && password == 'password') {
      localStorage.setItem('user', username);
      this.userIsLogedIn.next(true);
      return true;
    } else {
      this.userIsLogedIn.next(false);
      return false;
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.userIsLogedIn.next(false);
  }
  getUser(): string {
    return localStorage.getItem('user') as string;
  }
  isLoggedIn() {
    if (this.getUser() !== null) {
      this.userIsLogedIn.next(true);
      return true;
    } else {
      this.userIsLogedIn.next(false);
      return false;
    }
  }
}
/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //user = '';
  constructor() {}
  login(username: string, password: string) {
    if (username == 'user' && password == 'password') {
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('user');
  }
  getUser(): string {
    return localStorage.getItem('user') as string;
  }
  isLoggedIn() {
    return this.getUser() !== null;
  }
}
 */
