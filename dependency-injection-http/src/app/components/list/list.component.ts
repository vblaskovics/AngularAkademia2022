import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public userList: UserModel[] = [];


  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    /* this.httpService.fetchData()
    .then(userList => this.userList = userList)
    .catch(err => console.log(err)) */

    this.httpService.getUsers().subscribe({
      next: (userList) => {
        this.userList = userList;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    });
  }

}
