import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  score: number = this.mainService.score;

  constructor(public mainService: MainServiceService) {
    this.mainService.scoreSubject.subscribe({
      next: (num) => (this.score = num),
    });
  }

  ngOnInit(): void {}
}
