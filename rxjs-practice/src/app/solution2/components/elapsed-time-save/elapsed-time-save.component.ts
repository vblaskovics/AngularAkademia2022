import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { filter, Observable, Subscription, tap } from 'rxjs'

@Component({
  selector: 'app-elapsed-time-save',
  templateUrl: './elapsed-time-save.component.html',
  styleUrls: ['./elapsed-time-save.component.css']
})
export class ElapsedTimeSaveComponent implements OnInit {


  elapsedTotalTime$: Observable<number> = new Observable();

  constructor(private stateService: StateService, ) {
   }

  ngOnInit(): void {

    this.elapsedTotalTime$ = this.stateService.elapsedTime$.pipe(
      filter((t) => t % 5 === 0),
      tap((t) => {
        console.log(t === 0 ? 'Kezdés' : `Váltás ${t - 5} -> ${t}`);
      })
    );
  }

}
