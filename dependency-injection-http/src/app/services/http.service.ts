import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDto } from '../models/user.dto';
import { User } from '../models/user.model';
import { map } from 'rxjs';
import { HttpServiceInterface } from '../interfaces/http.service';
@Injectable({
  providedIn: 'root',
})
export class HttpService implements HttpServiceInterface {
  readonly BASE_URL = environment.apiUrl;
  public usersUpdated: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  /*   public async fetchData(): Promise<User[]> {
    const response = await fetch(this.BASE_URL + 'users');
    //console.log(response.json());
    return response.json().then((users: UserDto[]) => {
      const filteredUsers: User[] = [];
      users.forEach((user: UserDto) => {
        if (user.gender.toLocaleLowerCase() == 'female') {
          const parsedUser: User = {
            id: user.id!,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender,
          };
          filteredUsers.push(parsedUser);
        }
      });
      return filteredUsers;
    });
  } */
  public fetchUsers(): Observable<User[]> {
    return this.http.get<UserDto[]>(environment.apiUrl + 'users').pipe(
      map((userDtoList) => {
        const filteredList = userDtoList.filter(
          (u) => u.gender.toLowerCase() == 'female'
        );
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
    console.log(user);
    return this.http.post<UserDto>(this.BASE_URL + 'users', user);
  }
  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_URL + 'users/' + id);
  }
  //public fetchData() {}
}
