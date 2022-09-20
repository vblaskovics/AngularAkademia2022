import {
  HttpClient,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}`);
  }

  getRandomUser(): Observable<User> {
    let random: number = Math.floor(Math.random() * 10) + 1;
    console.log(`${this.API}` + `/${random}`);

    return this.http.get<User>(`${this.API}` + `/${random}`);
  }

  getUserByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}?username=${username}`);
  }

  getUsersByEmail(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}?email=${username}`);
  }
}
