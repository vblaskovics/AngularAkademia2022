import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getOne(id: string | number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  getUserByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?username=${username}`);

  }
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?email=${email}`);
  }
}
