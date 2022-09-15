import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, interval, switchMap, map, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-post-count',
  templateUrl: './post-count.component.html',
})
export class PostCountComponent implements OnInit, OnDestroy {

  user$: Observable<User[]> = new Observable();
  postCount$: Observable<number> = new Observable();

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.user$ = timer(0, 3000).pipe(
      switchMap(() => this.userService.getUserByUsername('Bret'))
    );

    this.postCount$ = this.user$.pipe(
      switchMap((users) => this.postService.getPostsByUserId(users[0]?.id)),
      map((posts) => posts.length)
    );
    
  }

  ngOnDestroy(): void {

  }

}
