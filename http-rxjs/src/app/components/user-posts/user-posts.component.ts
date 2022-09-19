import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, delay } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  usersWithPostCount$: Observable<any[]> = new Observable<any[]>();

  user1?: { name: string; count: number };
  user2?: { name: string; count: number };
  user3?: { name: string; count: number };

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    forkJoin({
      user1: this.userService.getUser(1).pipe(delay(2000)),
      user2: this.userService.getUser(2).pipe(delay(3000)),
      user3: this.userService.getUser(3).pipe(delay(6000)),
      posts: this.postService.getPostsByParams('userId=1&userId=2&userId=3'),
    }).subscribe((data) => {
      this.user1 = {
        name: data.user1.name,
        count: this.getUserNPostCountWithE(data.user1.id, data.posts),
      };
      this.user2 = {
        name: data.user2.name,
        count: this.getUserNPostCountWithE(data.user2.id, data.posts),
      };
      this.user3 = {
        name: data.user3.name,
        count: this.getUserNPostCountWithE(data.user3.id, data.posts),
      };
    });
  }

  getUserNPostCountWithE(id: number, posts: Post[]): number {
    let postCounterE = posts.filter(
      (post) => post.userId === id && post.title.startsWith('e', 0)
    );
    return postCounterE.length;
  }
}
