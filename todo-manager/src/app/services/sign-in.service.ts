import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }

  signIn(user: string, password: string): boolean {
    if(user === 'user' && password === 'password') {
      localStorage.setItem('userName', user);
      return true;
    }
    return false;
  }

  signOut(): void {
    localStorage.removeItem('userName');
  }

  getUser(): string {
    return localStorage.getItem('userName') as string;
  }

  isSignedIn(): boolean {
    return this.getUser() !== null;
  }
}
