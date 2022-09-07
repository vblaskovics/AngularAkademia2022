import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { UserDto } from 'src/app/models/user.dto';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { HttpServiceInterface } from '../interfaces/http-service.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpMockService implements HttpServiceInterface {

  readonly BASE_URL = environment.apiUrl;
  public usersUpdated: Subject<boolean> = new Subject<boolean>();

  private mockUserList: UserDto[] = [
    {
      id: 1,
      first_name: 'Flora',
      last_name: 'Toth',
      email: 'tothflora@gmail.com',
      gender: 'Female',
    },
    {
      id: 2,
      first_name: 'Kitti',
      last_name: 'Nagy',
      email: 'nagykitti@gmail.com',
      gender: 'Female',
    },
  ];

  constructor() {}

  public getUsers(): Observable<User[]> {
    return of(this.mockUserList).pipe(
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
    const newUser: UserDto = {
      ...user,
      id: this.mockUserList.length + 1,
    };

    this.mockUserList.push(newUser);
    return of(newUser);
  }

  public deleteUser(id: number): Observable<void> {
    const userIndex: number = this.mockUserList.findIndex((u) => u.id === id);
    this.mockUserList.splice(userIndex, 1);
    return of();
  }
}
