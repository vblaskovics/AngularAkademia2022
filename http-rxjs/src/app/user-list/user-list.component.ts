import { User } from '../models/user-model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getUsers();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
