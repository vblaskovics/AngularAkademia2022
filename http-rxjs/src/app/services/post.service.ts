import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/IPost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private API = 'https://jsonplaceholder.typicode.com/posts';
  //?userId=1
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<IPost[]>(this.API);
  }
  getUsersPosts(userId: number) {
    return this.http.get<IPost[]>(this.API + '?userId=1');
  }
  getPostsyParams(param: string) {
    return this.http.get<IPost[]>(this.API + param);
  }
}
