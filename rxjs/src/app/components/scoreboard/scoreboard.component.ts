import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit {
  turnCounter: number;
  scoreCounter: number;
  constructor(private gameService: GameService) {
    this.turnCounter = gameService.currentTurn;
    this.scoreCounter = gameService.points;
    gameService.game$.subscribe(() => {
      this.turnCounter = gameService.currentTurn;
      this.scoreCounter = gameService.points;
    });
  }

  ngOnInit(): void {}
}
