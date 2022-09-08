import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { UserDto } from 'src/app/models/user.dto';
import { User } from 'src/app/models/user.model';
import { map } from 'rxjs';
import { HttpServiceInterface } from 'src/app/interfaces/http.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpMockService implements HttpServiceInterface {
  readonly BASE_URL: string = environment.apiUrl;
  public usersUpdated: Subject<boolean> = new Subject<boolean>();
  private mockUserList: UserDto[] = [
    {
      id: 1,
      first_name: 'mana',
      last_name: 'pana',
      email: 'asd',
      gender: 'Female',
    },
    {
      id: 2,
      first_name: 'dsa',
      last_name: 'dsa',
      email: 'dadsad',
      gender: 'Male',
    },
  ];

  constructor() {}
  public fetchUsers(): Observable<User[]> {
    return of(this.mockUserList).pipe(
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
