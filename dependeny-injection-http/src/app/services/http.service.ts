import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDto } from '../models/user.dto';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly BASE_URL = environment.apiUrl;
  users: UserDto[] = [];

  constructor() { }


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

  // public async fetchNewData(a: any, x: any, index: number): Promise<UserModel[]>{
  //   let p = new Promise((resolve, reject) => resolve('x'))
  //   let userGender = this.users[index].gender;
  //   userGender = userGender.map(x => p.then(y => x + y))
  //   console.log(a)

  //   const promises = a.map(x => p.then(y => x + y))
  //   Promise.all(promises).then(console.log, console.error)
  // }



  public postUser(user: UserDto): void {
    console.log(user);
  }




}
