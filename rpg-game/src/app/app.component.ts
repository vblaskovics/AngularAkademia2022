import { HttpService } from './services/http.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Character } from './models/character.model';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rpg-game';

  // shadow copy, deepy copy, object destructuring?!

  public characterList$?: Observable<Character[]>;

  c1?: Character;
  c2?: Character;

  winner?: Character;
  endGame: boolean = false;

  c1Selected: boolean = false;
  c2Selected: boolean = false;

  textToDisplay: string = '';

  constructor(
    private gameService: GameService,
    private displayService: DisplayService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.getCharacters();
  }

  async onAttack(): Promise<void> {
    let i: number = 0;
    while (this.c2!.hp > 0 && this.c1!.hp > 0) {
      this.gameService.attack(this.c1!, this.c2!);
      this.textToDisplay = this.displayService.getHistoryText();
      await this.sleep(1000);
    }
    if (this.c2!.hp > 0) {
      this.winner = this.c2;
    }
    if (this.c1!.hp > 0) {
      this.winner = this.c1;
    }
    this.endGame = true;
  }

  // setTimeout(() => {
  //   if (this.router.url === '/home') {
  //     window.alert('welcome');
  //   }
  // },1000)

  onReset() {
    this.endGame = false;
    this.c1Selected = false;
    this.c2Selected = false;
    this.getCharacters();
    this.textToDisplay = '';
    this.displayService.resetHistoryEvent();
  }

  public getCharacters(): void {
    this.characterList$ = this.httpService.getCharacters();
  }

  onFirstCharSelected(): void {
    this.c1Selected = true;
  }
  onSecondCharSelected(): void {
    this.c2Selected = true;
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
