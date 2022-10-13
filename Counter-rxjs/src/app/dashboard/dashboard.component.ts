import { Subscription } from 'rxjs';
import { randomtext } from './../randomtext-model';
import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  randomize!: any;
  randomtext: string = 'aacdfe'

  constructor(private counterService: CounterServiceService) { }

  ngOnInit() {
    // this.randomize = 
    this.counterService.getRandomtext()
    // .subscribe()
  }

  displayRandomText(){
    this.counterService.getRandomtext()
  }

}
