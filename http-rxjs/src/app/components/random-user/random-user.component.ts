import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit, OnDestroy {

  user?: User;
  intervalRef: any;

  constructor(private userService: UserService) { }

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
