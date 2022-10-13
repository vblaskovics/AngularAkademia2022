import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Form } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{

  public userList$?: Observable<UserModel[]>;

  // @Input() userSaved: boolean = false;
  // @Output() resetUserSaved: EventEmitter<void> = new EventEmitter<void>(); sibling komm. miatt

  // public userList: UserModel[] = [];
  // private subscription: Subscription | undefined
  private subscription?: Subscription; //ha kérdőjeles akkor az alapértéke undefined

  constructor(private httpService: HttpService) { }

  public getFilteredUser(): void {
  //   this.httpService.fetchData()
  //   .then(userList => {
  //     console.log(userList)
  //   })
  //   .catch(err => console.log(err));

  // this.httpService.getUsers().subscribe({
  //   next: (userList) => {console.log(userList)
  //           this.userList = userList},
  //   error: (err) => {console.log(err)},
  //   complete: () => {},
  // })
    this.userList$ = this.httpService.getUsers();   //a fenti sorok helyett
  
  }

  ngOnInit(): void {
    this.getFilteredUser()

    //subject fogadó fél hogy frissüljön a lista:
    this.subscription = this.httpService.usersUpdated.subscribe((updated: boolean) => {
      if(updated) {
      this.getFilteredUser()}
    });
  }

  public deleteUser(id: number): void{
    this.httpService.deleteUser(id).subscribe({
      next: () => {},
      error: (err) => {console.log(err)},
      complete: () => {
        this.getFilteredUser();
      },
    })
    
  }

  // ngOnChanges(changes: SimpleChanges): void { // sibling komm. miatt
  //   if(changes.hasOwnProperty('userSaved')){
  //     this.getFilteredUser();
  //     this.resetUserSaved.emit();

  //   }

  // }


  ngOnDestroy(): void {
    // if(this.subscription) {
    // this.subscription?.unsubscribe();}  ez ugyanaz, mint a lenti kód

    this.subscription?.unsubscribe();
  }

}
