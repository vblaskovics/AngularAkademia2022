import { StateService } from './../../services/state.service';
import { Observable, filter, tap, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer2',
  templateUrl: './timer2.component.html',
  styleUrls: ['./timer2.component.css'],
})
export class Timer2Component implements OnInit {

  time$: Observable<number> = new Observable();

  constructor(private stateService: StateService) {

    // this.time$ = this.stateService.elapsedTime$.pipe(
    //   filter((t) => t % 5 === 0),
    //   tap((t) => {if(t%5 === 0 && t > 0) { console.log('váltás ${t-5} -> ${t}')}})
    // )

    this.time$ = this.stateService.elapsedTime$.pipe(
      filter((t) => t % t === 0),
      tap((t) => {if(t%t === 0 ) { alert('Magic happened 💥')}})
    )
  }

  ngOnInit(): void {}
}
