import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-custom-five-counter2',
  templateUrl: './custom-five-counter2.component.html',
  styleUrls: ['./custom-five-counter2.component.css'],
})
export class CustomFiveCounter2Component implements OnInit, OnDestroy {
  timesFive$: Observable<number>;
  timesFiveALL$: Observable<number>;
  clockSub: Subscription;
  elapsedTime$: Observable<number>;
  constructor(private stateService: StateService) {
    this.timesFive$ = stateService.timesFive$.pipe(
      filter((t: number) => {
        return t % 5 == 0;
      })
    );
    this.timesFiveALL$ = stateService.timesFive$;
    this.clockSub = stateService.clock$.subscribe((i) => {
      stateService.timesFive$.next(stateService.timesFive$.getValue() + 1);
    });
    this.elapsedTime$ = stateService.clock$.pipe(
      map((t) => {
        return stateService.elapsedTime;
      }),
      filter((t: number) => {
        return t % 5 == 0;
      })
    );
  }
  ngOnDestroy(): void {
    this.clockSub.unsubscribe();
  }

  ngOnInit(): void {}
}
