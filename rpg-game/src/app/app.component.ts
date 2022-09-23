import { HttpService } from './services/http.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  public characterList$?: Observable<Character[]>;

  c1?: Character;
  c2?: Character;

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

  onAttack(): void {
    this.gameService.attack(this.c1!, this.c2!);
    this.textToDisplay = this.displayService.getHistoryText();
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
}
