import { Component, OnInit } from '@angular/core';
import {
  delay,
  filter,
  forkJoin,
  from,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { IPost } from 'src/app/interfaces/IPost';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feladat5',
  templateUrl: './feladat5.component.html',
  styleUrls: ['./feladat5.component.scss'],
})
export class Feladat5Component implements OnInit {
  usersWithPosts$: Observable<any>;
  constructor(
    private usersService: UserService,
    private postService: PostService
  ) {
    //usersService.getUsersByIds([1, 2, 3]).subscribe();

    this.usersWithPosts$ = forkJoin({
      user1: usersService.getUser(1).pipe(delay(this.makeRandom(4, 2))),
      user2: usersService.getUser(2).pipe(delay(this.makeRandom(4, 2))),
      user3: usersService.getUser(3).pipe(delay(this.makeRandom(4, 2))),
      posts: postService.getPostsyParams('?userId=1&userId=2&userId=3').pipe(
        delay(this.makeRandom(4, 2)),
        map((posts: IPost[]) => {
          let goodPosts: IPost[] = [];
          posts.forEach((post: IPost) => {
            /* if (/^[e]/.test(post.title)) {
              goodPosts.push(post);
            } */
            if (post.title[0] == 'e') {
              goodPosts.push(post);
            }
          });
          return goodPosts;
        })
      ),
    }).pipe(
      map((join: any) => {
        console.log(join);
        return [
          {
            user: join.user1,
            posts: join.posts.filter((x: IPost) => x.userId == join.user1.id),
          },
          {
            user: join.user2,
            posts: join.posts.filter((x: IPost) => x.userId == join.user2.id),
          },
          {
            user: join.user3,
            posts: join.posts.filter((x: IPost) => x.userId == join.user3.id),
          },
        ];
      }),
      tap((x) => console.log(x))
    );
  }
  makeRandom(max: number, min: number) {
    let random = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    console.log(random);

    return random;
  }
  ngOnInit(): void {}
}
