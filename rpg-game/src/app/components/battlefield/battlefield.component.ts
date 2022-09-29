import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription, map, tap } from 'rxjs';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.scss'],
})
export class BattlefieldComponent implements OnInit, OnDestroy {
  firstChar$: Observable<Character | null>;
  secondChar$: Observable<Character | null>;
  winner$: Observable<string | undefined>;
  battleSub: Subscription = new Subscription();

  firstCharacterHitCounter$: Observable<number>;
  secondCharacterHitCounter$: Observable<number>;

  clock$ = interval(1000);
  constructor(
    private characterService: CharacterService,
    private gameService: GameService
  ) {
    this.firstCharacterHitCounter$ = this.gameService.firstCharacterHitCounter$;
    this.secondCharacterHitCounter$ =
      this.gameService.secondCharacterHitCounter$;
    this.winner$ = gameService.winner$;
    this.firstChar$ = characterService.firstCharacter$;
    this.secondChar$ = characterService.secondCharacter$;
  }
  ngOnDestroy(): void {
    this.battleSub.unsubscribe();
  }
  ngOnInit(): void {}

  resetBattle() {
    this.gameService.winner$.next(undefined);
  }
  startBattle(firstCharacter: Character, secondCharacter: Character) {
    this.battleSub = this.clock$
      .pipe(tap((x) => this.handleBattle(firstCharacter, secondCharacter)))
      .subscribe();
  }
  handleBattle(firstCharacter: Character, secondCharacter: Character) {
    if (firstCharacter && secondCharacter) {
      if (firstCharacter.hp > 0 && secondCharacter.hp > 0) {
        console.log('battling');
        this.gameService.attack(firstCharacter, secondCharacter);
      } else {
        if (firstCharacter.hp == 0 && secondCharacter.hp == 0) {
          this.gameService.winner$.next('noone');
        } else {
          this.gameService.winner$.next(
            firstCharacter.hp > secondCharacter.hp
              ? firstCharacter.name
              : secondCharacter.name
          );
        }
        this.battleSub.unsubscribe();
      }
    }
  }
}
