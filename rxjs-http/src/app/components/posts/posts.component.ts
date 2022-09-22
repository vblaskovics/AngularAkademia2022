import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, delay } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  user1PostsWithE?: {name: string, posts: number}
  user2PostsWithE?: {name: string, posts: number}
  user3PostsWithE?: {name: string, posts: number}

  usersWithPostCount$:Observable<any[]> = new Observable();
  constructor(private userService: HttpService, private postService:PostService) { }

  ngOnInit(): void {
    /*this.usersWithPostCount$ = */
    
    forkJoin({
      user1: this.userService.getUser(1).pipe(delay(2000)),
      user2: this.userService.getUser(2).pipe(delay(3000)),
      user3: this.userService.getUser(3).pipe(delay(6000)),
      posts: this.postService.getPostsByParams('userId=1&userId=2&userId=3')
    }).subscribe((data) => {
      console.log(data);

      this.user1PostsWithE = {name: data.user1.name, posts: this.getNumberOfUserPostsStartsWithE(data.user1.id, data.posts)}
      this.user2PostsWithE = {name: data.user2.name, posts: this.getNumberOfUserPostsStartsWithE(data.user2.id, data.posts)}
      this.user3PostsWithE = {name: data.user3.name, posts: this.getNumberOfUserPostsStartsWithE(data.user3.id, data.posts)}    
    })
  }

  getNumberOfUserPostsStartsWithE(userId: number, posts: Post[]): number{
    let postsWithE = posts.filter(post => {
      if(post.userId === userId && post.title.startsWith('e', 0)){
        return true
      } else {
        return false
      }
    })
    return postsWithE.length
  }

}
