import { map, Observable, switchMap, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  // randomUser$: Observable<User> = new Observable();
  user$: Observable<User[]> = new Observable();
  // postCount: number = 0;
  postCount$: Observable<number> = new Observable();

  // timerRef: any;

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    // this.randomUser$ = timer(0, 3000).pipe(
    //   map(() => Math.floor(Math.random() * 10) + 1),
    // )
    // timer(0, 3000).pipe(
    //   map(() => Math.floor(Math.random() * 10) + 1),
    // ).subscribe((userId) => {
    //   this.randomUser$ = this.userService.getOne(userId);
    // })

    // this.timerRef = timer(0, 3000).subscribe(() => {
    //   this.user$ = this.userService.getUserByUsername('Bret');
    //   this.user$.subscribe((user) => {
    //     this.postService.getPostsByUserId(user[0].id).subscribe((posts) => {
    //       // console.log(posts)
    //       // console.log(user);
    //       this.postCount = posts.length
    //     })
    //   });
    // })

    //olyan változtatás kell, ami átállít egy másik Observable-re a timer helyett:
    //switchMap returnölhet egy observable-lel -> usert ki tudjuk vinni a template-be
    // this.user$ = timer(0, 3000).pipe(
    //   switchMap(() => {
    //     return this.userService.getUserByUsername('Bret')
    //   })
    // )
    this.user$ = timer(0, 3000).pipe(
      switchMap(() => this.userService.getUserByUsername('Bret'))
    );

    this.postCount$ = this.user$.pipe(
      switchMap((users) => this.postService.getPostsByUserId(users[0]?.id)),
      map((posts) => posts.length)
    )

  }

  //timer: megadni a legelső időpontot, ahol először meghívod az eseményt)

}
