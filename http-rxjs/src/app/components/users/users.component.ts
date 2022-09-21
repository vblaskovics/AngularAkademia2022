import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!:Observable<User[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

}
