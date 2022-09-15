import { StateService } from '../../services/state.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-time-logger',
  templateUrl: './time-logger.component.html',
  styleUrls: ['./time-logger.component.css']
})
export class TimeLoggerComponent implements OnInit
// , OnDestroy
{

  time: number = 0;
  clockSubscription?: Subscription;
  time$: Observable<number> = new Observable();

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    //megoldás1 - bugos
    // this.stateService.clock$.subscribe((t) => {
      //   this.time = t - t % 5;

      //   if (t % 5 === 0 && t > 0) {
        //     console.log(t === 0 ? 'Kezdés' : `Váltás ${t-5} -> ${t}`);

        //   }
        // });

        //megoldás2 - jó, de...
        // lementjük a feliratkozást a clockS.-be:
        // this.clockSubscription = this.stateService.clock$.pipe(
        //   filter((t) => t % 5 === 0),
        //   ).subscribe((t) => {
        //     console.log(t === 0 ? 'Kezdés' : `Váltás ${t-5} -> ${t}`);

        //     this.time = t;
        //   });

          //megoldás3 - legjobb

       this.time$ = this.stateService.clock$.pipe(
        filter((t) => t % 5 === 0),
        tap((t) => {
          console.log(t === 0 ? 'Kezdés' : `Váltás ${t-5} -> ${t}`);
        })
       );

  }

  //megoldás2 része:
  //ha föl vagyunk iratkozva: leiratkozás:

  // ngOnDestroy(): void {
  //   this.clockSubscription?.unsubscribe();
  // }

}
