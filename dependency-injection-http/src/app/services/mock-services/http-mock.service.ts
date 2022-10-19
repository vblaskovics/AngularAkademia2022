import { Injectable } from '@angular/core';
import { of, map, Observable, Subject } from 'rxjs';
import { UserDto } from 'src/app/models/user.dto';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { HttpServiceInterface } from '../interfaces/http-service.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpMockService implements HttpServiceInterface{

  readonly BASE_URL = environment.apiUrl;
  public usersUpdated: Subject<boolean> = new Subject<boolean>();

  private mockUserList: UserDto[] = [
    {
      id: 1,
      first_name: 'Mark',
      last_name: 'Aha',
      email: 'asd@asd.asd',
      gender: 'Male'
    },
    {
      id: 2,
      first_name: 'Kram',
      last_name: 'Aha',
      email: 'asd@dsadsa.asd',
      gender: 'Female'
    }
  ]

  constructor() { }

  public getUsers(): Observable<UserModel[]> {
    return of(this.mockUserList).pipe(
      map(userDtoList => {
        const filteredList = userDtoList.filter(u => u.gender === "Female");

        return filteredList.map(u => {
          const userModel: UserModel = {
            id: u.id!,
            firstName: u.first_name,
            lastName: u.last_name,
            email: u.email,
            gender: u.gender
          }

          return userModel;
        })
      })
    );

  }

  public postUser(user: UserDto): Observable<UserDto> {
    const newUser: UserDto = {
      ...user,
      id: this.mockUserList.length + 1
    }

    this.mockUserList.push(newUser);
    return of(newUser)
  }

  public deleteUser(id: number): Observable<void> {
    const userIndex: number = this.mockUserList.findIndex(u => u.id === id);
    this.mockUserList.splice(userIndex, 1);
    return of();
  }
}
