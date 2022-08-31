import { Injectable } from '@angular/core';
import {UserDto} from "../models/user.dto";
import {environment} from "../../environments/environment";
import {UserModel} from "../models/user.model";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public async fetchData(): Promise<UserModel[]> {
    const response = await fetch(this.BASE_URL + '/users');

    return response.json()
      .then((userDtoList: UserDto[]) => {
        return userDtoList.filter(user => user.gender === "Female");
      })
      .then((filteredUserDtoList) => {
        return filteredUserDtoList.map(user => {
          const userModel: UserModel = {
            id: user.id!,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender
          }
          return userModel;
        })

      })
  }


  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserDto[]>(this.BASE_URL + '/users').pipe(
      map(userDtoList => {
        const filteredList = userDtoList.filter(u => u.gender === "Female");
        return filteredList.map(u => {
          const userModel: UserModel = {
            id: u.id!,
            firstName: u.first_name,
            lastName: u.last_name,
            email: u.email,
            gender: u.gender,
          }
          return userModel;
        })
      })
    )
  }

  public postUser(user: UserDto): void {
    console.log(user);
  }



}
