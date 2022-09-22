import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = new Observable<User[]>()

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.users$ = this.httpService.getUsers()
  }

}
