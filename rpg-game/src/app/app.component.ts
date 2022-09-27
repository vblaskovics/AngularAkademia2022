import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from './model/character.interface';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';
import { Observable, Subscription, timer } from 'rxjs';
import { CharacterHttpService } from './services/character-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rpg-game';

  characters: Character[] = [];
  subscription!: Subscription;
  characters$: Observable<Character[]> = new Observable();

  constructor(
    private gameService: GameService,
    private displayService: DisplayService,
    private characterHttp: CharacterHttpService
  ) {}

  recieveCharacter(event: Character[]) {
    this.characters = event;
    console.log(event);
  }

  simulateFight(): void {
    this.displayService.addHistoryEvent('Fight started');
    this.subscription = timer(0, 4000).subscribe(() => {
      this.gameService.attack(this.characters[0], this.characters[1]);
      if (this.characters[0].hp <= 0) {
        this.displayService.addHistoryEvent(
          `${this.characters[0].name} defeated.`
        );
        this.displayService.addHistoryEvent(`${this.characters[1].name} is the winner.`);
        this.subscription.unsubscribe();
      }
      if (this.characters[1].hp <= 0) {
        this.displayService.addHistoryEvent(
          `${this.characters[1].name} defeated.`
        );
        this.displayService.addHistoryEvent(`${this.characters[0].name} is the winner.`);
        this.subscription.unsubscribe();
      }
    });
  }

  logCombat() {
    return this.displayService.getHistoryText();
  }

  displayKillingSpreeMsg() {
    return this.displayService.getKillingSpreeMsg();
  }

  reset() {
    this.subscription.unsubscribe();
    this.displayService.clearHistory();
    this.characters$ = this.characterHttp.getCharacter();
  }
}
