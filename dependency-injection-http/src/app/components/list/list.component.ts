import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {UserModel} from "../../models/user.model";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy, OnChanges {

  // public userList: UserModel[] = [];
  public userList$?: Observable<UserModel[]>;

  //private subscription: Subscription | undefined;
  private subscription?: Subscription;


  // @Input() userSaved: boolean = false;
  // @Output() resetUserSavedState: EventEmitter<void> = new EventEmitter<void>();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getUsers();

    this.subscription = this.httpService.usersUpdated.subscribe(
      (updated: boolean) => {
        if(updated) {
          this.getUsers();
        }
      }
    )

    // this.httpService.usersUpdated.subscribe(
    //   (updated: boolean) => {
    //     if(updated) {
    //       this.getUsers();
    //     }
    //   }
    // ).unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes.hasOwnProperty('userSaved')) {
    //   this.getUsers();
    //   this.resetUserSavedState.emit();
    // }
 
  }

  public getUsers(): void {
    // this.httpService.fetchData()
    //   .then(userList => this.userList = userList)
    //   .catch(err => console.log(err))

    // this.httpService.getUsers().subscribe({
    //   next: (userList) => {
    //     this.userList = userList;
    //   },
    //   error: (err) => {console.log(err)},
    //   complete: () => {}
    // })

    this.userList$ = this.httpService.getUsers();
  }

  public deleteUser(id: number): void {
    this.httpService.deleteUser(id).subscribe({
      next: () => {},
      error: (err) => {console.log(err)},
      complete: () => {
        this.getUsers();
      }
    })
  }


  ngOnDestroy(): void {
    // if(this.subscription) {
    //   this.subscription.unsubscribe()
    // }
    this.subscription?.unsubscribe();
  }

}
