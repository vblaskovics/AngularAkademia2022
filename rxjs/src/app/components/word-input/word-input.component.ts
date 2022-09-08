import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css'],
})
export class WordInputComponent implements OnInit {
  input: string = '';
  constructor(private gameService: GameService) {
    gameService.game$.subscribe(() => {
      this.input = '';
    });
  }

  ngOnInit(): void {}
  handleOKClick() {
    this.gameService.submit(this.input);
  }
  handleKeyPress(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      this.gameService.submit(this.input);
    }
  }
}
