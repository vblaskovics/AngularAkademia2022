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

  timerRef: Observable<number> = new Observable();
  user$: Observable<User[]> = new Observable();
  postCount: number = 0;

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    timer(0, 3000).subscribe(() => {
      this.user$ = this.userService.getUserByUsername('Bret');
      this.user$.subscribe((user) => {
        this.postService.getPostsByUserId(user[0].id).subscribe((posts) => {
          console.log(posts)
          this.postCount = posts.length
        })
      });
    })
  }

  ngOnDestroy(): void {

  }

}
