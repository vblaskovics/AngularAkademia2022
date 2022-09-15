import { Component, OnInit } from '@angular/core';
import { Observable, timer, interval, switchMap, map, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-random-user2',
  templateUrl: './random-user2.component.html',
  styleUrls: ['./random-user2.component.css']
})
export class RandomUser2Component implements OnInit {

  randomUser$: Observable<User> = new Observable();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    timer(0, 3000).pipe(
      map(() => Math.floor(Math.random() * 10) + 1),
    ).subscribe((userId) => {
      this.randomUser$ = this.userService.getUser(userId);
    })
  }

}