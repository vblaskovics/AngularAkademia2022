import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // count: number = 0;
  counter$: Observable<number>;

  constructor(private stateService: StateService) {
    this.counter$ = stateService.counter$;

    // stateService.counter$.subscribe((value) => {
    //   this.count = value;
    // });
  }

  ngOnInit(): void { }



}
