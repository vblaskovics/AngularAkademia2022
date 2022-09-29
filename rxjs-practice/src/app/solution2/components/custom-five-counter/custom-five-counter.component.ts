import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-custom-five-counter',
  templateUrl: './custom-five-counter.component.html',
  styleUrls: ['./custom-five-counter.component.css'],
})
export class CustomFiveCounterComponent implements OnInit, OnDestroy {
  //counter5$: Observable<number>;
  counter5: number = 0;
  counter5Sub: Subscription;
  time$: Observable<number> = new Observable<number>();
  constructor(private stateService: StateService) {
    this.time$ = this.stateService.clock$.pipe(
      filter((i: number) => {
        return i % 5 == 0;
      }),
      tap((i) => console.log(`váltás ${i} -> ${i + 5}`))
    );
    this.counter5Sub = this.stateService.clock$
      .pipe(
        filter((i: number) => {
          return i % 5 == 0;
        }),
        tap((i) => console.log(`váltás ${i} -> ${i + 5}`))
      )
      .subscribe((i) => (this.counter5 = i));
  }
  ngOnDestroy(): void {
    this.counter5Sub.unsubscribe();
  }

  ngOnInit(): void {}
}
