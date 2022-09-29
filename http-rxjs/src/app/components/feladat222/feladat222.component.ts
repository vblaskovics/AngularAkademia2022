import { Component, OnInit } from '@angular/core';
import { map, Observable, tap, timer } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feladat222',
  templateUrl: './feladat222.component.html',
  styleUrls: ['./feladat222.component.scss'],
})
export class Feladat222Component implements OnInit {
  randomUser$?: Observable<IUser>;
  // usersPosts$?: Observable<IPost[]>;
  postCount = 0;
  constructor(
    private userService: UserService,
    private postService: PostService
  ) {
    timer(0, 3000)
      .pipe(
        map(() => {
          return Math.floor(Math.random() * 10) + 1;
        }),
        tap((x) => console.log(x))
      )
      .subscribe((userId) => {
        this.randomUser$ = this.userService.getUser(userId);
        this.userService.getUser(userId).subscribe((user) => {
          this.postService.getUsersPosts(userId).subscribe((posts) => {
            this.postCount = posts.length;
          });
        });
        // this.usersPosts$ = this.postService.getUsersPosts(userId);
      });
  }
  ngOnInit(): void {}
}
