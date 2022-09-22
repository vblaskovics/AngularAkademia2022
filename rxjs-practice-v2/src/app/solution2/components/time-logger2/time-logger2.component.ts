import { Component, OnInit } from '@angular/core';
import { filter, Observable, tap, map, Subscription } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-time-logger2',
  templateUrl: './time-logger2.component.html',
  styleUrls: ['./time-logger2.component.css']
})
export class TimeLogger2Component implements OnInit {

  time$: Observable<number> = new Observable();

  constructor(private stateService:StateService) { }

  ngOnInit(): void {
    this.time$ = this.stateService.elapsedTime$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {
        console.log(t === 0 ? 'Kezdés' : `Váltás ${t - 5} -> ${t}`);
      })
    );
  }

}
