import { Component } from '@angular/core';
import { Character } from './interfaces/character';
import { GameService } from './services/game.service';
import { HistoryService } from './services/history.service';
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { RandomService } from './services/random.service';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpg-game';

  // char1: Character;
  // char2: Character;
  isAttacking: boolean = false;
  interval?: any

  historyLog?: string
  winner: BehaviorSubject<Character | null> = new BehaviorSubject<Character | null>(null)

  constructor(private gameService: GameService, private historyService: HistoryService, private randomService: RandomService, private charService: CharacterService) {
    // this.char1 = {name: "Hero", attack: this.randomService.getRandomNumber(), defense: 4, hp: 4};
    // this.char2 = {name: "Ork", attack: this.randomService.getRandomNumber(), defense: 3, hp: 3}
  }

  onAttack() {
    let c1 = this.charService.char1?.getValue();
    let c2 = this.charService.char2?.getValue();

    // rxjs interval / takeUntil
    
    this.isAttacking = true;
    this.interval = setInterval(() => {
      if(c1!.hp === 0) {
        this.winner = this.charService.char2!
        clearInterval(this.interval)
      } else if (c2!.hp === 0) {
        this.winner = this.charService.char1!
        clearInterval(this.interval)
      } else if(c1!.hp > 0 && c2!.hp > 0) {
        this.gameService.attack(c1!, c2!)
        this. historyLog = this.historyService.getHistoryText(this.historyService.history)
        console.log(this.historyService.history)
      } else {
        clearInterval(this.interval)
      }
    }, 1000) 
  }

  onReset() {
    this.gameService.resetGame()
    this.winner.next(null)
    console.log(this.winner?.value)
  }

  
}
