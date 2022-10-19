import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css']
})
export class Users2Component implements OnInit, OnDestroy {

  user?: User;
  intervalRef: any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.refreshUser();
    this.intervalRef = setInterval(() => this.refreshUser(), 3000)
  }

  refreshUser(): void {
    let randomUid = Math.round(Math.random() * 10) + 1;
    this.userService.getUser(randomUid).subscribe((u) => {
      this.user = u;
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }

}
