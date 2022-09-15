import { StateService } from './../../services/state.service';
import { Observable, filter, Subscription, tap } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-elapsed',
  templateUrl: './elapsed.component.html',
  styleUrls: ['./elapsed.component.css'],
})
export class ElapsedComponent implements OnInit, OnDestroy {
  time: number = 0;

  showTimeElapsedStatus: boolean = true;
  private toggleLoggerStatus?: Subscription;
  private clockSubscription?: Subscription;

  time$: Observable<number> = new Observable();

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

    this.time$ = this.stateService.clock$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {
        console.log(t === 0 ? 'START' : `Change ${t - 5} -> ${t}`);
      })
    );

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
