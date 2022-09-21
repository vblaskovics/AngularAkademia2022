import { PostService } from './../services/post.service';
import { User } from '../models/user-model';
import { timer, Observable, switchMap, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-random-user3',
  templateUrl: './random-user3.component.html',
  styleUrls: ['./random-user3.component.css']
})
export class RandomUser3Component implements OnInit {

  // timerRef: Observable<number> = new Observable();
  timerRef: any;
  user$: Observable<User[]> = new Observable();
  postCount$: Observable<number> = new Observable();

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    // timer(0, 3000).subscribe(() => {
    //   this.user$ = this.userService.getUserByUsername('Bret');
    //   this.user$.subscribe((user) => {
    //     this.postService.getPostsByUserId(user[0].id).subscribe((posts) => {
    //       console.log(posts)
    //       this.postCount = posts.length
    //     })
    //   });
    // }) better solution:


    this.user$ = timer(0, 3000).pipe(
      switchMap( () => this.userService.getUserByUsername('Bret'))
    )

    this.postCount$ = this.user$.pipe(
      switchMap((users)=> this.postService.getPostsByUserId(users[0]?.id)),
      map((posts) => posts.length)
    );
  }

  ngOnDestroy(): void {

  }
}
