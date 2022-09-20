import { Posts } from './../model/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private API: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.API}`);
  }

  getPostsByParams(params: string): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.API}/?${params}`)
  }

  getPostsByUserId(userId: number): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.API}?userId=${userId}`);
  }
}
