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

  constructor(private userService: UserService) { }


  ngOnInit(): void {

  }

}
