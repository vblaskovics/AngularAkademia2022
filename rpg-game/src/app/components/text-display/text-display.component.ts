import { Component, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { DisplayService } from 'src/app/services/display.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  c1: Character = {
    name: 'Hero',
    attack: 4,
    defense: 5,
    health: 8
  }
  c2: Character = {
    name: 'Orc',
    attack: 3,
    defense: 3,
    health: 5
  }
  @Input() textToDisplay: string = ""

  ngOnInit(): void {
  }

  constructor(private gameService: GameService, private displayService: DisplayService) { }

  onAttack(): void {
    this.gameService.attack(this.c1, this.c2);
    this.textToDisplay = this.displayService.getHistoryText();
  }
}
