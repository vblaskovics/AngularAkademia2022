import { Component, OnInit } from '@angular/core';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-logger2',
  templateUrl: './logger2.component.html',
  styleUrls: ['./logger2.component.css']
})
export class Logger2Component implements OnInit {

  time: number = 0;
  clockSubscription?: Subscription;
  time$: Observable<number> = new Observable();

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.time$ = this.stateService.elapsedTime$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {
        console.log(t === 0 ? 'Kezdés' : `Váltás ${t-5} -> ${t}`);
      })
     );

  }

}
