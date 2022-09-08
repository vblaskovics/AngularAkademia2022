import { Injectable } from '@angular/core';

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
