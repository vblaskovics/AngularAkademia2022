import { PhotoService } from './../services/photo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, interval, switchMap, map, tap } from 'rxjs';
import { User } from '../model/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { ReturnStatement } from '@angular/compiler';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-post-count',
  templateUrl: './post-count.component.html',
})
export class PostCountComponent implements OnInit, OnDestroy {
  // timerRef: Observable<number> = new Observable();
  user$: Observable<User[]> = new Observable();
  postCount$: Observable<number>  = new Observable();


  constructor(
    private userService: UserService,
    private postService: PostService,
    private photoService: PhotoService,
    private albumService: AlbumService,

  ) {}

  // ngOnInit(): void {
  //   timer(0, 3000).subscribe(() => {
  //     this.user$ = this.userService.getUserByUsername('Bret');
  //     this.user$.subscribe((user) => {
  //       this.postService.getPostsByUserId(user[0].id).subscribe((posts) => {
  //         console.log(posts)
  //         this.postCount = posts.length
  //       })
  //     });
  //   })
  // }

  ngOnInit(): void {
    this.user$ = timer(0, 3000).pipe(
      switchMap(() =>
        this.userService.getUserByUsername('Bret'))
    );

    this.postCount$ = this.user$.pipe(
      switchMap((users) => this.postService.getPostsByUserId(users[0]?.id)),
      map((posts) => posts.length)
    )
  }

  ngOnDestroy(): void {}
}
