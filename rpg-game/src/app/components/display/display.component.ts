import { Component, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/model/character';
import { DisplayService } from 'src/app/service/display.service';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {

  historyText: string;
  @Input() selectedChar!: Character;

  constructor(
    private displayService: DisplayService,
    /* private gameService: GameService */
  ) {
    this.historyText = this.displayService.getHistoryText();
  }

  ngOnInit(): void {}

/*   onAttackClicked(): void {
    this.gameService.attack(this.character1, this.character2);
    this.historyText = this.displayService.getHistoryText();
  } */

}
