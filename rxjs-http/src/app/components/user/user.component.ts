import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy  {

  id?: number;
  user?: User;

  user$?: Observable<User>;

  intervalRef: any;

  constructor(private userService: UserService) {
  }


  ngOnInit(): void {
    this.refreshUser();
    this.intervalRef = setInterval(() => this.refreshUser(), 3000)
  }

  refreshUser(): void {
    this.id = Math.floor(Math.random() * 10) + 1;
    this.userService.getOne(this.id).subscribe((value) => {
      this.user = value;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }

}
