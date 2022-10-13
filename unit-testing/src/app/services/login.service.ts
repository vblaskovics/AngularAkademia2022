import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  login(user: string, password: string): boolean {
    if(user === 'user' && password === 'password') {
      localStorage.setItem('username', user)
      return true
    }
    return false
  }

  logout(): void {
    localStorage.removeItem('username')
    this.router.navigate(['login'])
  }

  getUser(): string {
    return localStorage.getItem('username') as string
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null
  }
}
