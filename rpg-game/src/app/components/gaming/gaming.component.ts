import { GameService } from './../../services/game.service';
import { Character } from './../../models/Character';
import { LoggerService } from './../../services/logger.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { RandomService } from 'src/app/services/random.service';
import { lastValueFrom } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css'],
})
export class GamingComponent implements OnInit {
  c1: Character = { attack: 2, defense: 2, health: 8, name: 'Béla' };
  c2: Character = { attack: 2, defense: 2, health: 8, name: 'Ork' };

  constructor(
    private gameService: GameService,
    private displayService: DisplayService,
    private loggerService: LoggerService,
    randomService: RandomService
  ) {}

  bigAttack() {
    let random = Math.floor(Math.random() * (0 - 4));
    this.gameService.attack(this.c1, this.c2);
    this.textToDisplay = this.displayService.getHistoryText();
  }

  textToDisplay: string = '';

  ngOnInit(): void {}
}
