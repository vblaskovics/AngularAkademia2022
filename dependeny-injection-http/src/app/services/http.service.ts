import { HttpServiceInterface } from './interfaces/http-service.interface';
import { UserModel } from './../models/user.model';
import { UserDto } from './../models/user.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpServiceInterface {

  public usersUpdated:Subject<boolean> = new Subject<boolean>()

 readonly BASE_URL = environment.apiUrl;
  users: UserDto[] = [];

  constructor(private http: HttpClient) { }


  public async fetchData():Promise<UserModel[]> {
    const response = await fetch( this.BASE_URL + '/users');

    return response.json()
      .then((userList: UserDto[]) => {
        return userList.filter(user => user.gender === "Female");
      })
      .then((filteredList: UserDto[]) => {
        return filteredList.map(user=>{
          const userModel: UserModel = {
            id: user.id!,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender, }
          return userModel;
        })
      })
  }


  public getUsers(): Observable<UserModel[]>{
    return this.http.get<UserDto[]>(this.BASE_URL + '/users').pipe(
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



  // public async fetchNewData(a: any, x: any, index: number): Promise<UserModel[]>{
  //   let p = new Promise((resolve, reject) => resolve('x'))
  //   let userGender = this.users[index].gender;
  //   userGender = userGender.map(x => p.then(y => x + y))
  //   console.log(a)

  //   const promises = a.map(x => p.then(y => x + y))
  //   Promise.all(promises).then(console.log, console.error)
  // }

  public postUser(user: UserDto): Observable<UserDto>{
    return this.http.post<UserDto>(this.BASE_URL + '/users', user );
  }


  public deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_URL + '/users/' + id ); // /users/ - kell a / jel, mert id-t használunk
  }


}
