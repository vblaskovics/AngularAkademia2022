import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { timer, map, Observable, switchMap } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-random-user-another',
  templateUrl: './random-user-another.component.html',
  styleUrls: ['./random-user-another.component.css']
})
export class RandomUserAnotherComponent implements OnInit, OnDestroy {

  timerRef: any;
  user$: Observable<User[]> = new Observable();
  postCount: number = 0;

  postCount$: Observable<number> = new Observable()

  constructor(private httpService: HttpService, private postService: PostService) { }

  ngOnInit(): void {
    // timer(0, 3000).subscribe(() => {
    //   this.user$ = this.httpService.getUserByUsername('Bret');
    //   this.user$.subscribe((user) => {
    //     console.log(user)
    //     this.postService.getPostsByUserId(user[0].id).subscribe((posts) => {
    //       console.log(posts)
    //       this.postCount = posts.length
    //     })
    //   });
    // })

    this.user$ = timer(0, 3000).pipe(
      switchMap(() => this.httpService.getUserByUsername('Bret'))
    )

    this.postCount$ = this.user$.pipe(
      switchMap((users) => this.postService.getPostsByUserId(users[0]?.id)),
      map(posts => posts.length)
    )
  }

  ngOnDestroy(): void {
    
  }



}
