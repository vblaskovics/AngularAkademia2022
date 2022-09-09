import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  word: {value:string};
  
  constructor(private counterService: CounterServiceService) { 
    this.word = this.counterService.getWord();
  }

  ngOnInit() {
  
  }

  

}
