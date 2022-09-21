/* import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent implements OnInit {
  user?: User;
  intervalRef?: any;

  constructor(public userService: UserService) {
    this.randomId = this.getRandomId();
    this.userService.getUser(this.randomId).subscribe((res) => {
      this.user = res;
    });
  }

  ngOnInit(): void {}

  getRandomId(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
 */
