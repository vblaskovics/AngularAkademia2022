import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable, timer } from 'rxjs';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-post',
  templateUrl: './users-post.component.html',
  styleUrls: ['./users-post.component.css']
})
export class UsersPostComponent implements OnInit {

  timerRef: Observable<number> = new Observable();
  user$: Observable<User[]> = new Observable();
  postCount: number = 0;

  constructor(private userService: UsersService, private postService: PostsService) { }

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



}
