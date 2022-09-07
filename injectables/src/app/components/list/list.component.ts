import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy, OnChanges {


  // public userList: UserModel[] = [];
  public userList$?: Observable<UserModel[]>;

  private subscription?: Subscription;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getUsers();

    this.httpService.usersUpdated.subscribe((updated: boolean) => {
      if (updated) {
        this.getUsers();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  public getUsers() {
    // this.httpService
    //   .fetchData()
    //   .then((userList) => (this.userList = userList))
    //   .catch((err) => console.log(err));

    // this.httpService.getUsers().subscribe({
    //   next: (userList) => {
    //     this.userList = userList;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {},
    // });

    this.userList$ = this.httpService.getUsers();
  }

  public deleteUser(id: number): void {
    this.httpService.deleteUser(id).subscribe({
      next: () => {},
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getUsers();
      },
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
