import { User } from '../models/user-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API: string = 'https://jsonplaceholder.typicode.com/users'

  user: User[] = [];

  constructor(private http: HttpClient) {
   }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.API}`)
  }

  // public postUser(user: User): Observable<User>{
  //   return this.http.post<User>('https://jsonplaceholder.typicode.com/users', user );
  // }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getUserByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?username=${username}`);
  }

  getUsersByEmail(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}?email=${username}`);
  }

}
