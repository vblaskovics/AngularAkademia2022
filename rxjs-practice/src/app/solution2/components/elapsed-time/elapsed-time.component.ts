import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { filter, Observable, Subscription, tap } from 'rxjs'

@Component({
  selector: 'app-elapsed-time',
  templateUrl: './elapsed-time.component.html',
  styleUrls: ['./elapsed-time.component.css']
})
export class ElapsedTimeComponent implements OnInit {

  elapsedTime: number = 0;
  clockSubscription?: Subscription;
  time$: Observable<number> = new Observable();

  constructor(private stateService: StateService) {

  }

  ngOnInit(): void {

    // Megoldás 1

    /* this.stateService.clock$.subscribe((t) => {
      this.elapsedTime = t - t % 5;

      if (t % 5 === 0) {
        console.log(t === 0 ? 'Kezdés' : `Váltás ${t - 5} -> ${t}`)
      }
    }); */

    // Megoldás 2

    /* this.clockSubscription = this.stateService.clock$.pipe(
      filter((t) => t % 5 === 0),
    ).subscribe((t) => {
      console.log(t === 0 ? 'Kezdés' : `Váltás ${t - 5} -> ${t}`);

      this.elapsedTime = t;
    }); */

    // Megoldás 3

    this.time$ = this.stateService.clock$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {
        console.log(t === 0 ? 'Kezdés' : `Váltás ${t - 5} -> ${t}`);
      })
    );


  }

  //Megoldás 2 része

  /* ngOnDesctroy(): void {
    this.clockSubscription?.unsubscribe();
  } */

}
