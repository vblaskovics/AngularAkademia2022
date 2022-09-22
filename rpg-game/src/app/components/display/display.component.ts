import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { DisplayService } from 'src/app/service/display.service';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {

  historyText: string = this.displayService.getHistoryText();
  character1: Character;
  character2: Character;

  constructor(
    private displayService: DisplayService,
    private gameService: GameService
  ) {
    this.character1 = { attack: 4, defense: 7, hp: 8, name: 'Harry' };
    this.character2 = { attack: 8, defense: 6, hp: 8, name: 'Piton' };
    this.historyText = this.displayService.getHistoryText();
  }

  ngOnInit(): void {}

  onAttackClicked(): void {
    this.gameService.attack(this.character1, this.character2);
    this.historyText = this.displayService.getHistoryText();
  }
}
