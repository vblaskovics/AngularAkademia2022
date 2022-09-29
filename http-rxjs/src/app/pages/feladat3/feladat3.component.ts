import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  map,
  Observable,
  of,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { IPost } from 'src/app/interfaces/IPost';
import { IUser } from 'src/app/interfaces/IUser';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feladat3',
  templateUrl: './feladat3.component.html',
  styleUrls: ['./feladat3.component.scss'],
})
export class Feladat3Component implements OnInit {
  user$: Observable<any>;

  postCount$ = new Observable<number>();
  constructor(
    private userservice: UserService,
    private postService: PostService
  ) {
    /*   this.user$ = timer(0, 3000).pipe(
      switchMap(() => {
        let name = 'Bret';

        return this.userservice.getUserByName(name);
      }),
      tap((user: IUser) => {
        console.log(user);

        this.postService.getUsersPosts(user.id).subscribe((posts: IPost[]) => {
          this.postCount = posts.length;
        });
      })
    ); */
    /* this.user$ = timer(0, 3000).pipe(
      switchMap(() => {
        let name = 'Bret';

        return this.userservice.getUserByName(name);
      }),
      map((user: IUser) => {
        return combineLatest(of(user), this.postService.getUsersPosts(user.id));
      }),
      map((mergedData: any) => {
        this.postCount = (mergedData[1] as Array<IPost>).length;
        return mergedData[0];
      }) */
    this.user$ = timer(0, 3000).pipe(
      switchMap(() => {
        return this.userservice.getUserByName('Bret');
      }),
      tap((x) => console.log(x))
    );
    this.postCount$ = this.user$.pipe(
      switchMap((user: IUser) => {
        return this.postService.getUsersPosts(user.id);
      }),
      map((posts) => {
        return posts.length;
      })
    );
    /* tap((user: IUser) => {
        console.log(user);

        this.postService.getUsersPosts(user.id).subscribe((posts: IPost[]) => {
          this.postCount = posts.length;
        });
      }) */
  }
  /* let name = 'Bret';

      this.user$ = this.userservice.getUserByName(name);
      this.userservice.getUserByName(name).subscribe((user: IUser) => {
        this.postService.getUsersPosts(user.id).subscribe((post: IPost[]) => {
          this.postCount = post.length;
        });
      });
    }); */

  ngOnInit(): void {}
}
