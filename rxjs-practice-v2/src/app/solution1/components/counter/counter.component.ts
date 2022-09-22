import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/solution1/services/state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: { value: number };

  constructor(private stateService: StateService) {
    this.counter = this.stateService.getCounter();
  }

  ngOnInit(): void { }



}
