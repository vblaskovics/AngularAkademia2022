import { CounterServiceService } from './../counter-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: {value:number};

  constructor(private counterService: CounterServiceService) {
    this.counter = this.counterService.getCounter();
  }

  ngOnInit(): void {
    
  }
}
