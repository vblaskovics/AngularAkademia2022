import { HttpMockService } from './../../services/mock-services/http-mock.service';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UserModel } from 'src/app/models/user.model';
import { Subscription,Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  // users: UserModel[] = []
  userList$?: Observable<UserModel[]>

  private subscription?: Subscription;
  // @Input() newUser?: UserDto


  constructor(private httpService: HttpService, private httpMockService: HttpMockService) { }

  ngOnInit(): void {
    //PROMISE
    // this.httpService.fetchData().then(resp => this.users = resp)  

    //OBSERVABLE
    this.getUsers()


   this.subscription = this.httpService.usersUpdated.subscribe((updated: boolean) => {
      if(updated){
        this.getUsers()
      }
    })
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes.hasOwnProperty('newUser')){
  //     this.getUsers() 
  //   }
  // }

  deleteUser(id: number) {
    this.httpService.deleteUser(id).subscribe({
      next: () => {},
      error: (err) => {console.log(err)},
      complete: () => {
        this.getUsers()
      },
    })
  }

  getUsers() {
    // this.httpService.getUsers()
    // .subscribe({
    //   next: (userList) => {this.users = userList},
    //   error: (err) => {console.log(err)},
    //   complete: () => {},
    // })  

    this.userList$ = this.httpService.getUsers()
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
