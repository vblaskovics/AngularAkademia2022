import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDto } from '../models/user.dto';
import { User } from '../models/user.model';
import { HttpServiceInterface } from './interfaces/http-service.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService implements HttpServiceInterface{
  readonly BASE_URL = environment.apiUrl;
  public usersUpdated: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  public async fetchData(): Promise<User[]> {
    const response = await fetch(this.BASE_URL + '/users');
    return response
      .json()
      .then((userDtoList: UserDto[]) => {
        return userDtoList.filter((user) => user.gender === 'Female');
      })
      .then((filteredUserDtoList: UserDto[]) => {
        return filteredUserDtoList.map((user) => {
          const userModel: User = {
            id: user.id!,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender,
          };
          return userModel;
        });
      });
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<UserDto[]>(this.BASE_URL + '/users').pipe(
      map((userDtoList) => {
        const filteredList = userDtoList.filter((u) => u.gender === 'Female');

        return filteredList.map((u) => {
          const userModel: User = {
            id: u.id!,
            firstName: u.first_name,
            lastName: u.last_name,
            email: u.email,
            gender: u.gender,
          };
          return userModel;
        });
      })
    );
  }

  public postUser(user: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.BASE_URL + '/users', user);
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_URL + '/users/' + id);
  }
}