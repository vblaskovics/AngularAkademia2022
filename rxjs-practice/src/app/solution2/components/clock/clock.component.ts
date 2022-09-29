import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  elapsedTime$: Observable<number>;
  constructor(private stateService: StateService) {
    this.elapsedTime$ = stateService.elapsedTime$;
  }

  ngOnInit(): void {}
}
