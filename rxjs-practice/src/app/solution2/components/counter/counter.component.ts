import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private stateService: StateService) {
    this.counter$ = this.stateService.counter$;
  }

  ngOnInit(): void { }



}
