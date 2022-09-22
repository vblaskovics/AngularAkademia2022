import { Component } from '@angular/core';
import { Character } from './interfaces/character';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpg-game';
  character2$: BehaviorSubject<Character | null> = this.gameService.character2$;

  charNames$: Observable<string[]>;
  textToDisplay: string = ""

  constructor(public gameService: GameService, private displayService: DisplayService, private characterService:CharacterService) {
    this.charNames$ = this.characterService.getCharacterNames();

  }

  onAttack(): void {
    let c1 = this.gameService.character1$.getValue();
    let c2 = this.gameService.character2$.getValue();
    if (!c1 || !c2) return;
    this.gameService.attack(c1, c2);
    this.textToDisplay = this.displayService.getHistoryText();
  }
}
