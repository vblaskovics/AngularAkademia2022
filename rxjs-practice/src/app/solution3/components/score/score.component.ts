import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score: { value: number };
  constructor(private stateService: StateService) {
    this.score = this.stateService.getScore();
  }

  ngOnInit(): void {

  }


}
