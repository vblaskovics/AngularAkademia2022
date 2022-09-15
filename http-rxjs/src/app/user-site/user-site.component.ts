import { PostService } from './../services/post.service';
import { UserService } from '../services/user.service';
import { Component, OnInit, Output } from '@angular/core';
import { User } from '../model/user';
import { Posts } from '../model/posts';
import { Observable, timer, interval, switchMap, map, tap } from 'rxjs';

@Component({
  selector: 'app-user-site',
  templateUrl: './user-site.component.html',
  styleUrls: ['./user-site.component.css'],
})
export class UserSiteComponent implements OnInit {
  users$!: Observable<User>;
  posts$!: Observable<Posts>;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.getRandomUser()
    this.userService.getRandomUser().subscribe(x => {console.log(x);
    })

  }
}
