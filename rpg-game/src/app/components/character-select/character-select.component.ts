import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { DisplayService } from 'src/app/services/display.service';
import { GameService } from 'src/app/services/game.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {

  selectedChar1?: Character;
  selectedChar2?: Character;
  characters$: Observable<Character[]> = this.httpService.getCharacters();
  historyText: string = this.displayService.getHistoryText();

  constructor(
    private gameService: GameService,
    private displayService: DisplayService,
    private httpService: HttpService,
    ) { }

  ngOnInit(): void {
  }

  onSelect1(event: any) {
    this.httpService.getCharacterByName(event?.target.value).subscribe((c) => {
      // console.log(c[0]);
      this.selectedChar1 = c[0];
    })
  }
  onSelect2(event: any) {
    this.httpService.getCharacterByName(event?.target.value).subscribe((c) => {
      this.selectedChar2 = c[0];
    })
  }

  onAttack() {
    if(!this.selectedChar1 || !this.selectedChar2) {
      this.displayService.addHistoryEvent('Válassz két karaktert!');
      this.historyText = this.displayService.getHistoryText();
    } else if(this.selectedChar1?.name === this.selectedChar2?.name) {
      this.displayService.addHistoryEvent('Válassz különböző karaktereket!');
      this.historyText = this.displayService.getHistoryText();
    } else {
      this.gameService.attack(this.selectedChar1!, this.selectedChar2!);
      this.historyText = this.displayService.getHistoryText();
    }
  }

}

