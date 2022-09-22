import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, Subject, switchMap} from 'rxjs';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(users => {
        return users.map(user => {
          const userModel: User = {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username
          }
          return userModel
        })
      })
    )
  }

  // Saját megoldás!
  //      ||

  getRandomUser(id: number): Observable<User> {  

      return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
        map(user => {
          const userModel: User = {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username
          }
          return userModel
        })
      )
  }

  getUserByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}?username=${username}`);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}?email=${email}`)
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.API}/${id}`);
  }
}
