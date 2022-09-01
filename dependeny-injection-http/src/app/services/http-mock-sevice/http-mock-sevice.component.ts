import { environment } from './../../../environments/environment';
import { HttpServiceInterface } from './../interfaces/http-service.interface';
import { UserDto } from 'src/app/models/user.dto';
import { UserModel } from 'src/app/models/user.model';
import { Observable, of, map, Subject } from 'rxjs';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-http-mock-sevice',
  templateUrl: './http-mock-sevice.component.html',
  styleUrls: ['./http-mock-sevice.component.css']
})
export class HttpMockSeviceComponent implements HttpServiceInterface{

  public usersUpdated:Subject<boolean> = new Subject<boolean>();
  readonly BASE_URL = environment.apiUrl;


  private mockUserList: UserDto[] = [{
    id: 1,
    first_name: 'Ella',
    last_name: 'Johns',
    email: 'ellajo@mac.com',
    gender: 'Female'},
    {
    id: 1,
    first_name: 'Amanda',
    last_name: 'Jenkins',
    email: 'amanjen@mac.com',
    gender: 'Female'
    }
  ]

  constructor() { }

  public getUsers(): Observable<UserModel[]>{
    return of (this.mockUserList).pipe(
      map(UserDtoList => {
        const filteredList = UserDtoList.filter(u => u.gender === 'Female');
        return filteredList.map(u => {
          const UserModel: UserModel = {
          id: u.id!,
          firstName: u.first_name,
          lastName: u.last_name,
          email: u.email,
          gender: u.gender,
        } 
        return UserModel;}
        )
      })
    ) 
  }


  public postUser(user: UserDto): Observable<UserDto>{
    const newUser: UserDto = {
      ...user, 
      id: this.mockUserList.length + 1
    }

    this.mockUserList.push(newUser);
    return of(newUser);
  }


  public deleteUser(id: number): Observable<void> {
    const userIndex: number = this.mockUserList.findIndex(u => u.id === id);
    this.mockUserList.splice(userIndex, 1);
    return of();
  }


}
