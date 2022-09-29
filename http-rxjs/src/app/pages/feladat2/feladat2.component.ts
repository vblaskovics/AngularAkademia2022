import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject, switchMap, tap, timer } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feladat2',
  templateUrl: './feladat2.component.html',
  styleUrls: ['./feladat2.component.scss'],
})
export class Feladat2Component implements OnInit {
  currentUser$: Observable<IUser>;
  interval$ = timer(0, 3000);
  constructor(private userService: UserService) {
    /* setInterval(() => {
      this.currentUser$ = this.userService.getRandomUser();
    }, 3000); */
    this.currentUser$ = this.interval$.pipe(
      tap((interval) => console.log(interval)),
      switchMap(() => {
        return this.userService.getRandomUser();
      })
    );
    // this.currentUser$ = this.userService.getRandomUser();
  }

  ngOnInit(): void {}
}
