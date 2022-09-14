import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // count: number = 0;

  counter$: Observable<number>;

  // constructor(private stateService: StateService) {
  //   stateService.counter$.subscribe((value)=> {
  //     this.count = value
  //   })
  // }

   constructor(private stateService: StateService) {
    this.counter$ = this.stateService.counter$;
  }

  ngOnInit(): void { }



}
