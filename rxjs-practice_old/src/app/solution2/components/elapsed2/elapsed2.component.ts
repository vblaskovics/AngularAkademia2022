import { StateService } from './../../services/state.service';
import { Observable, filter, Subscription, tap } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-elapsed2',
  templateUrl: './elapsed2.component.html',
  styleUrls: ['./elapsed2.component.css'],
})
export class Elapsed2Component implements OnInit, OnDestroy {
  time: number = 0;

  showSpecial: boolean = false;

  showTimeElapsedStatus: boolean = true;
  private toggleLoggerStatus?: Subscription;
  private clockSubscription?: Subscription;

  time$: Observable<number> = new Observable();

  isPrime: boolean = false;
  isSpecial: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    // SOLUTION 1:

    // this.stateService.clock$.subscribe((t) => {
    //   this.time = t - (t % 5);
    //   if (t % 5 === 0 && t > 0) {
    //     console.log(t === 0 ? 'START' : `Change ${t - 5} -> ${t}`);
    //   }
    // });

    // SOLUTION 2:

    // this.clockSubscription = this.stateService.clock$
    //   .pipe(filter((t) => t % 5 === 0))
    //   .subscribe((t) => {
    //     console.log(t === 0 ? 'START' : `Change ${t - 5} -> ${t}`);
    //     this.time = t;
    //   });

    // SOLUTION 3:

    // this.time$ = this.stateService.clock$.pipe(
    //   filter((t) => t % 5 === 0),
    //   tap((t) => {
    //     console.log(t === 0 ? 'START' : `Change ${t - 5} -> ${t}`);
    //   })
    // );

    // SOLUTION 4: TIMER CONTINUES IN THE BACKGROUND

    this.time$ = this.stateService.counter2$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {
        console.log(t === 0 ? 'START' : `Change ${t - 5} -> ${t}`);
      })
    );

    this.stateService.prime$.subscribe((value) => {
      this.isPrime = value;
      if (this.isPrime) {
        this.isSpecial = !this.isSpecial;
        setTimeout(() => {
          this.isSpecial = !this.isSpecial;
        }, 3000);
      }
    });

    this.toggleLoggerStatus = this.stateService.showLoggerStatus.subscribe(
      (didToggle) => {
        this.showTimeElapsedStatus = didToggle;
      }
    );
  }

  ngOnDestroy(): void {
    // this.clockSubscription?.unsubscribe();
    this.toggleLoggerStatus?.unsubscribe();
  }
}
