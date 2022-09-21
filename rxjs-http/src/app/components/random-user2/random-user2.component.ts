import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, switchMap, timer } from 'rxjs';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-random-user2',
  templateUrl: './random-user2.component.html',
  styleUrls: ['./random-user2.component.css'],
})
export class RandomUser2Component implements OnInit {
  timerRef: any;
  user$: Observable<User[]> = new Observable();
  postCount$: Observable<number> = new Observable();

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    /* timer(0, 3000).subscribe(() => {
      this.user$ = this.userService.getUserByUsername('Bret');
      this.user$.subscribe((user) => {
        this.postService.getPostsByUserId(user[0].id).subscribe((posts) => {
          console.log(posts);
          this.postCount = posts.length;
        });
      });
    }); */

    this.user$ = timer(0, 3000).pipe(
      switchMap(() => this.userService.getUserByUsername('Bret'))
    );

    this.postCount$ = this.user$.pipe(
      switchMap((users) => this.postService.getPostsByUserId(users[0]?.id)),
      map((posts) => posts.length)
    );
  }
}
