import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
})
export class ArenaComponent implements OnInit {

  showWinner: boolean = false;

  constructor(
    public characterService: CharacterService,
    public gameService: GameService
  ) {}

  ngOnInit(): void {}



  startFight() {
   this.gameService.attack(
     this.characterService.selectedCharactersArray[0],
     this.characterService.selectedCharactersArray[1]
   );
   let timer = interval(1000).subscribe((x) => {
     this.gameService.attack(
       this.characterService.selectedCharactersArray[0],
       this.characterService.selectedCharactersArray[1]
     );
     if (
       this.characterService.selectedCharactersArray[0].health <= 0 ||
       this.characterService.selectedCharactersArray[1].health <= 0
     ){
        this.getWinner();
        timer.unsubscribe();
      }
   });
  }

  getWinner(): string {
    if (this.characterService.selectedCharactersArray[0].health <= 0){
      this.showWinner = true;
      return this.characterService.selectedCharactersArray[1].name;
    }
    else{
      this.showWinner = true;
      return this.characterService.selectedCharactersArray[0].name;
    }
  }
}
