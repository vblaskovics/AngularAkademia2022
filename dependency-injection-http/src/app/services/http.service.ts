import { HttpServiceInterface } from './interfaces/http-service.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDto } from '../models/user.dto';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpServiceInterface{

  readonly BASE_URL = environment.apiUrl
  public usersUpdated: Subject<boolean> = new Subject<boolean>()

  constructor( private http: HttpClient) { }

  public async fetchData(): Promise<UserModel[]> {
    const response = await fetch(this.BASE_URL + '/users');

    return response.json()
      .then(users => {
        return users.filter((user: UserDto) => user.gender === "Female")
      })
      .then((filteredUsers: UserDto[] ) => {
        let changedUsers: UserModel[] = [];

        filteredUsers.map((user: UserDto) => {
          changedUsers.push({
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender,
          }
        )})

        return changedUsers
      })
  }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserDto[]>(this.BASE_URL + '/users').pipe(
      map(userDtoList => {
        const filteredList = userDtoList.filter(u => u.gender ==="Female")
        
        return filteredList.map(user => {
          const userModel: UserModel = {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender
          }
          return userModel
        })
      })
    )
  }

  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_URL + '/users/' + id)
  }

  public postUser(user: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.BASE_URL + '/users', user)     
  }
}
