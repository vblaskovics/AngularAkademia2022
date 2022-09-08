import { IfStmt } from '@angular/compiler';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy /* , OnChanges */ {
  constructor(private httpService: HttpService) {}
  users: User[] = [];
  public userList$?: Observable<User[]>;
  @Input() updateList!: boolean;
  private subscription?: Subscription;
  /* ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.hasOwnProperty('updateList')) {
      console.log(this.updateList);
      this.getUsers();
    }
  } */
  ngOnInit(): void {
    this.getUsers();
    this.subscription = this.httpService.usersUpdated.subscribe(
      (updated: boolean) => {
        if (updated) this.getUsers();
      }
    );
  }
  async getUsers() {
    /* const users: User[] = await this.httpService.fetchData();
    this.users = users;
    console.log(users); */
    /* this.httpService.fetchUsers().subscribe({
      next: (userList) => {
        console.log(userList);
        this.users = userList;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    }); */
    this.userList$ = this.httpService.fetchUsers();
  }
  deleteUser(id: number): void {
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
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
