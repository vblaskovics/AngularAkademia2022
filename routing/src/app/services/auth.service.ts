import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean {
    if(user === 'user' && password === 'password') {
      localStorage.setItem('username', user)
      return true
    }
    return false
  }

  logout(): void {
    localStorage.removeItem('username')
  }

  getUser(): string {
    return localStorage.getItem('username') as string
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null
  }
}
