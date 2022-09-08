import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  login(user: string, password: string): boolean{
    if(user === 'Username' && password === 'Password'){
      localStorage.setItem('username', user);
      return true;
    }
    else return false
  }

  logout(): void{
    localStorage.removeItem('username');
  }

  getUser(): string {
    return localStorage.getItem('username') as string;
  }

  isLoggedIn(): boolean{
    return this.getUser() !== null;
  }

}
