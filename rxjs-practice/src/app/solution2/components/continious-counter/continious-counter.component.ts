import { Component, OnInit } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-continious-counter',
  templateUrl: './continious-counter.component.html',
  styleUrls: ['./continious-counter.component.css']
})
export class ContiniousCounterComponent implements OnInit {


  time$: Observable<number> = new Observable<number>()

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.time$ = this.stateService.counter2$.pipe(
      filter(t => t % 5 === 0),
      tap(t => console.log(t === 0 ? `Kezdés` :`Váltás ${t-5} -> ${t}`))
    )
  }
}
