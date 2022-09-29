import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<IUser[]>;
  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {}
}
