import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private stateService: StateService) {
    this.counter$ = this.stateService.clock$;
  }

  ngOnInit(): void {}
}
