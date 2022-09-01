import { UserDto } from './../../models/user.dto';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy, OnChanges {

  // @Input() userSaved: boolean = false;
  // @Output() resetUserSavedState: EventEmitter<void> = new EventEmitter<void>();

  // public userList: UserModel[] = [];
  // private subscription: Subscription | undefined;

  public userList$?: Observable<UserModel[]>;
  private subscription?: Subscription;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getUsers();

    this.subscription = this.httpService.usersUpdated.subscribe(          // feliratkozunk a subjectre
      (updated: boolean) => {
        if(updated) {
          this.getUsers();
        }
      }
    )
  }

  public getUsers(): void {
    // this.httpService.fetchData()
    // .then(userList => this.userList = userList)
    // .catch(err => console.log(err)
    // )

    // this.httpService.getUsers().subscribe( {
    //   next: (userList) => {
    //     // console.log(userList);
    //     this.userList = userList;

    //   },
    //   error: (err) => {console.log(err);
    //   },
    //   complete: () => {},
    // });

    this.userList$ = this.httpService.getUsers();
  }

  public deleteUser(id: number): void {
    this.httpService.deleteUser(id).subscribe({
      next: () => {},
      error: (err) => {console.log(err);
      },
      complete: () => {
        this.getUsers();
      },
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes.hasOwnProperty('userSaved')) {
    //   this.getUsers();
    //   this.resetUserSavedState.emit();
    // }
  }

  ngOnDestroy(): void {
// if(this.subscription) {
//   this.subscription?.unsubscribe();
// }
    this.subscription?.unsubscribe();
  }

}
