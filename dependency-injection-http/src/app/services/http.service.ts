import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDto } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly BASE_URL = environment.apiUrl;

  constructor() {}

  public async fetchData(): Promise<UserDto[]> {
      const response = await fetch ( this.BASE_URL + '/users');
      return response.json();
      
  }

  public postUser(user: UserDto): void {
    console.log(user);
    }



}
