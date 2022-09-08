import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(username: string, password: string): boolean {
    if (username == 'user' && password == 'password') {
      localStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('username');
  }
  getUser(): string {
    return localStorage.getItem('username') as string;
  }
  isLoggedIn() {
    return this.getUser() !== null;
  }
}
