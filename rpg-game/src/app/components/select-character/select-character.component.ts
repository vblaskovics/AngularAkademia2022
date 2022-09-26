import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/model/character';
import { CharacterService } from 'src/app/service/character.service';
import { GameService } from 'src/app/service/game.service';
import { KillingSpreeCounterService } from 'src/app/service/killing-spree-counter.service';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.css'],
})
export class SelectCharacterComponent implements OnInit {
  selectedChar1: Character;
  selectedChar2: Character;

  characters$: Observable<Character[]>;

  constructor(
    private characterService: CharacterService,
    private gameService: GameService,
    private killingSpreeCounterService: KillingSpreeCounterService
  ) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters();
  }

  onStartFightButtonClicked() {
    this.gameService.isFightStarted = true;
    this.killingSpreeCounterService.setFighters(
      this.selectedChar1.name,
      this.selectedChar2.name
    );
    this.gameService.fight(this.selectedChar1, this.selectedChar2);
  }
}
