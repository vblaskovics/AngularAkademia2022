import { Observable, timer, map } from 'rxjs';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-site2',
  templateUrl: './user-site2.component.html',
  styleUrls: ['./user-site2.component.css'],
})
export class UserSite2Component implements OnInit {
  randomUser$: Observable<User> = new Observable();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.randomUser$ = timer(0, 3000).pipe(
    //   map(() => Math.floor(Math.random() * 10) + 1)
    // );
  }
}
