import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Post } from 'src/app/interfaces/post';

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

  getPostsByParams(params:string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API}/?${params}`);
  }

  // getUserPosts(name: string): Observable<number>{

  // }

}
