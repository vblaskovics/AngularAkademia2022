import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  public getFilteredUser(): void {
    this.httpService.fetchData()
    .then(userList => {
      console.log(userList)
    });
  }

  ngOnInit(): void {
    this.getFilteredUser()
  }

}
