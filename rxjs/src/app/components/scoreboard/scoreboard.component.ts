import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  /*  turnCounter: number;
  scoreCounter: number;
  turnSub: Subscription;
  scoreSub: Subscription; */
  turn;
  score;
  constructor(private gameService: GameService) {
    //this.turnCounter = gameService.currentTurn;
    // this.scoreCounter = gameService.points;
    /* gameService.game$.subscribe(() => {
       this.turnCounter = gameService.currentTurn;
      //this.scoreCounter = gameService.points;
    }); */
    this.turn = gameService.currentTurn$;
    this.score = gameService.points$;
    /*  this.turnCounter = gameService.points.value;
    this.scoreCounter = gameService.currentTurn.value;
    this.scoreSub = gameService.points.subscribe((score) => {
      this.scoreCounter = score;
    });
    this.turnSub = gameService.currentTurn.subscribe((turn) => {
      this.turnCounter = turn;
    }); */
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    /*  this.scoreSub.unsubscribe();
    this.turnSub.unsubscribe(); */
  }
}
