import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, delay } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  usersWithPostCount$:Observable<any[]> = new Observable();
  constructor(private userService:UserService, private postService:PostService) { }

  ngOnInit(): void {
    /*this.usersWithPostCount$ = */
    
    forkJoin({
      user1: this.userService.getUser(1).pipe(delay(2000)),
      user2: this.userService.getUser(2).pipe(delay(3000)),
      user3: this.userService.getUser(3).pipe(delay(6000)),
      posts: this.postService.getPostsByParams('userId=1&userId=2&userId=3')
    }).subscribe((data) => {
      console.log(data);
    })
  }

}
