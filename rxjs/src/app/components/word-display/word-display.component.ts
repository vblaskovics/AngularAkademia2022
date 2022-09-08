import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css'],
})
export class WordDisplayComponent implements OnInit {
  currentWord = '';
  constructor(private gameService: GameService) {
    /* gameService.currentWord$.subscribe((word) => {
      this.currentWord = word;
    }); */
    this.currentWord = gameService.currentWord;
    gameService.game$.subscribe(() => {
      this.currentWord = gameService.currentWord;
    });
  }

  ngOnInit(): void {}
}
