import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  score: {value: number};
  constructor(private counterService: CounterServiceService) { 
    this.score = this.counterService.getScore();
  }

  ngOnInit(): void {
  }

}
