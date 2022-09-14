import { Observable, map, filter, Subscription, tap } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../services/state.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy  {

 time: number = 0;
 clockSubscription?: Subscription;
 time$: Observable<number> = new Observable();

  constructor(private stateService: StateService) {
 
  //  1-es megoldás:
  //this.stateService.clock$.subscribe((t)=> {
  //     console.log(t);
  //     this.time = t - t % 5; // t = 4, time = 5,
  //     if(t%5 === 0 && t > 0) { console.log('váltás ${t-5} -> ${t}')}
  //  });
  }
  
  ngOnInit(): void {
    // 2-es megoldás:
    // this.clockSubscription = this.stateService.clock$.pipe(
    //   filter((t) => t % 5 === 0))
    //   .subscribe((t) => {
    //     console.log(t === 0 ? 'Kezdés' : 'Váltás ${t-5} -> ${t}');
    //     this.time = t;
    //   })

    //3-as megoldás:
    this.time$ = this.stateService.clock$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {if(t%5 === 0 && t > 0) { console.log('váltás ${t-5} -> ${t}')}})
    )
  }

  ngOnDestroy(): void {

    // 2-es megoldás része
    // this.clockSubscription?.unsubscribe();
  }

}
