import { HttpServiceInterface } from './../interfaces/http-service.interface';
import { Injectable } from '@angular/core';
import { Observable, of, map, Subject} from 'rxjs';
import { UserDto } from 'src/app/models/user.dto';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpMockService implements HttpServiceInterface {
  
  readonly BASE_URL = environment.apiUrl;
  public usersUpdated: Subject<boolean> = new Subject<boolean>()

  private mockUserList: UserDto[] = [
    {
      id: 1,
      first_name: 'Gergely',
      last_name: 'Polonkai',
      email: 'a@b.com',
      gender: 'Male'
    },
    {
      id: 2,
      first_name: 'Béla',
      last_name: 'Béna',
      email: 'asd@b.com',
      gender: 'Female'
    }
  ]

  constructor() { }

  public getUsers(): Observable<UserModel[]> {
    return of(this.mockUserList).pipe(
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
    const userIndex: number = this.mockUserList.findIndex(u => u.id === id);
    this.mockUserList.splice(userIndex, 1);
    return of()
  }

  public postUser(user: UserDto): Observable<UserDto> {
    const newUser: UserDto = {
      ...user,
      id: this.mockUserList.length + 1
    }

    this.mockUserList.push(newUser);
    return of(newUser);
  }
}
