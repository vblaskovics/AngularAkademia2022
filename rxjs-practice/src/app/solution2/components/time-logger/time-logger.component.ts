import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { filter, Observable, tap, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-time-logger',
  templateUrl: './time-logger.component.html',
  styleUrls: ['./time-logger.component.css']
})
export class TimeLoggerComponent implements OnInit/*, OnDestroy*/ {
  
  time: number = 0;
  clockSubscription?: Subscription;
  time$: Observable<number> = new Observable();

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    // MEGOLDAS 1
    // this.stateService.clock$.subscribe((t) => {
    //   this.time = t - t % 5;
    //   if (t % 5 === 0 ) {
    //     console.log(t === 0 ? 'Kezdés' : `Váltás ${t - 5} -> ${t}`);
    //   }
    // });
    
    // MEGOLDAS 2
    // this.clockSubscription = this.stateService.clock$.pipe(
    //   filter((t) => t % 5 === 0),
    // ).subscribe((t) => {
    //   console.log(t === 0 ? 'Kezdés' : `Váltás ${t - 5} -> ${t}`);
    //   this.time = t;
    // });

    // MEGOLDAS 3
    this.time$ = this.stateService.clock$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {
        console.log(t === 0 ? 'Kezdés' : `Váltás ${t - 5} -> ${t}`);
      })
    );

  }

  // MEGODLAS 2
  // ngOnDestroy(): void {
  //   this.clockSubscription?.unsubscribe();
  // }

}
