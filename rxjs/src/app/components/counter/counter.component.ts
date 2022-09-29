import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter;

  constructor(private gameService: GameService) {
    this.counter = gameService.counter$;
  }

  ngOnInit(): void {}
}
/* import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter;
  interval: any;
  constructor(private gameService: GameService) {
    this.handleCounter();
    this.counter = gameService.seconds;
    gameService.game$.subscribe(() => {
      this.handleCounter();
    });
  }
  handleCounter() {
    clearInterval(this.interval);
    this.counter = this.gameService.seconds;
    this.interval = setInterval(() => {
      this.counter--;
    }, 1000);
  }
  ngOnInit(): void {}
}
 */
