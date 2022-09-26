import { Component, OnInit } from '@angular/core';
import { Character } from './interfaces/character';
import { CharacterService } from './services/character.service';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'rpg-game';

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

  constructor(private gameService: GameService, private displayService: DisplayService, public characterService: CharacterService) { }

}
