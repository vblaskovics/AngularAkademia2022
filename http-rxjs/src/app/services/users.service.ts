import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API: string = 'https://jsonplaceholder.typicode.com/users';


  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.API}`);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.API}/${id}`);
  }

  getUserByUsername(username: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.API}?username=${username}`);
  }
}
