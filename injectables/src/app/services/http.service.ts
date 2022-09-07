import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDTO } from '../models/user.dto';
import { UserModel } from '../models/user.model';
import { HttpServiceInterface } from './interfaces/http-service.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService implements HttpServiceInterface{


  readonly BASE_URL = environment.apiUrl;
  public usersUpdated: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  public async fetchData(): Promise<UserModel[]> {
    const response = await fetch(this.BASE_URL + '/users');

    return response
      .json()
      .then((userList: UserDTO[]) => {
        return userList.filter((user) => user.gender === 'Female');
      })
      .then((filteredList: UserDTO[]) => {
        return filteredList.map((user) => {
          const userModel: UserModel = {
            id: user.id!,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            gender: user.gender,
          };
          return userModel;
        });
      });
  }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserDTO[]>(this.BASE_URL + '/users').pipe(
      map((userDTOList) => {
        const filteredList = userDTOList.filter((u) => u.gender === 'Female');
        return filteredList.map((u) => {
          const userModel: UserModel = {
            id: u.id!,
            first_name: u.first_name,
            last_name: u.last_name,
            email: u.email,
            gender: u.gender,
          };
          return userModel;
        });
      })
    );
  }

  public postUser(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.BASE_URL + '/users', user);
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_URL + '/users/' + id);
  }
}
