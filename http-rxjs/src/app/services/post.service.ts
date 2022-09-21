import { User } from '../models/user-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}`);
  }

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}?userId=${userId}`);
  }
}
