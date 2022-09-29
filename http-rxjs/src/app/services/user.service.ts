import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private API = 'https://jsonplaceholder.typicode.com/users';
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API).pipe(
      map((usersDto) => {
        let users: IUser[] = [];
        usersDto.forEach((user: IUser) => {
          users.push({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
          });
        });
        return users;
      }),
      tap((x) => console.log(x))
    );
  }
  getRandomUser(): Observable<IUser> {
    let random = Math.floor(Math.random() * 10 + 1);
    return this.http.get<IUser>(this.API + `/${random}`);
  }
  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.API + `/${id}`);
  }
  getUserByName(username: string): Observable<IUser> {
    return this.http.get<IUser[]>(this.API + `?username=${username}`).pipe(
      map((users: IUser[]) => {
        return users[0];
      })
    );
  }
  getUsersByIds(ids: number[]): Observable<IUser[]> {
    let usersUrl = '?';
    ids.forEach((id) => {});
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      usersUrl += `id=${id}`;
      if (i < ids.length - 1) {
        usersUrl += '&';
      }
    }
    console.log(this.API + usersUrl);

    return this.http.get<IUser[]>(this.API + usersUrl);
  }
  getUserByEmail(email: string): Observable<IUser> {
    return this.http.get<IUser[]>(this.API + `?email=${email}`).pipe(
      map((users: IUser[]) => {
        return users[0];
      })
    );
  }
  getRandomUserAsAw() {
    let random = Math.floor(Math.random() * 10 + 1);
    return this.http.get<IUser>(this.API + `/${random}`).toPromise();
  }
}
