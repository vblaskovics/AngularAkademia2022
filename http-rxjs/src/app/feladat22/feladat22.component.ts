import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-feladat22',
  templateUrl: './feladat22.component.html',
  styleUrls: ['./feladat22.component.scss'],
})
export class Feladat22Component implements OnInit {
  user;
  constructor(private userService: UserService) {
    this.user = this.userService.getRandomUserAsAw();

    setInterval(() => {
      this.user = this.userService.getRandomUserAsAw();
    }, 3000);
  }

  ngOnInit(): void {}
}
