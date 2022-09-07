import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { UserDTO } from 'src/app/models/user.dto';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { HttpServiceInterface } from '../interfaces/http-service.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpMockService implements HttpServiceInterface{

  readonly BASE_URL = environment.apiUrl;
  public usersUpdated: Subject<boolean> = new Subject<boolean>();

  private mockUserList: UserDTO[] = [
    {
      id: 1,
      first_name: 'Bence',
      last_name: 'Bernth',
      email: 'valami@valami',
      gender: 'Male'
    },
    {
      id: 2,
      first_name: 'Kitti',
      last_name: 'Vulden',
      email: 'ddd@aaa.com',
      gender: 'Female'
    },
  ]

  constructor() { }

  public getUsers(): Observable<UserModel[]> {
    return of(this.mockUserList).pipe(
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
    const newUser: UserDTO = {
      ...user,
      id: this.mockUserList.length+1
    }

    this.mockUserList.push(newUser);
    return of(newUser);
  }

  public deleteUser(id: number): Observable<void> {
    const userIndex: number = this.mockUserList.findIndex(u => u.id === id);

    this.mockUserList.splice(id,1);
    return of();
  }

}
