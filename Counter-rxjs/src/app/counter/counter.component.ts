import { CounterServiceService } from './../counter-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  countDown!: any;
  counter= 6;
  tick=1000;

  constructor(private counterService: CounterServiceService) {
  }

  ngOnInit() {
    this.countDown = this.counterService.getCounter(this.tick).subscribe(() => this.counter--);

  }

  ngOnDestroy(){
    this.countDown=null;
  }
}
