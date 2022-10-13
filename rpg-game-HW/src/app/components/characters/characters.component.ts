import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character';
import { DisplayService } from 'src/app/services/display.service';
import { GameService } from 'src/app/services/game.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  chars$: Observable<Character[]> = this.httpService.getChars();
  // names$ = this.httpService.getCharNames();
  historyText: string = ""

  // c1!: Character;
  // c2!: Character;
  selectedCs: Character[] = [];
  selectedC01?: Character;
  selectedC02?: Character;

  constructor(public httpService: HttpService, public gameService: GameService, public displayService: DisplayService) { 
    }

  ngOnInit(): void {
    // let id = 1;
    // this.httpService.getChar(id).subscribe((c) => {
    //   this.chars = c;
    // })
  }
  
  // onAttack(): void {
  // this.gameService.attack(this.c1, this.c2);
  // this.historyText = this.displayService.getHistoryText();
  // console.log(this.historyText)
  // }

  // onSelect(event: Event){
  //   if( typeof event ==='string'){
  //     this.httpService.getCharByName(event).subscribe()
  //     }
  // }


  onSelectC01(event: any) {
    // this.selectedCs.push(this.selectedC01!);
    console.log(event.target.value);
    
    this.httpService.getCharByName(event.target.value).subscribe((c:Character[])=>{
      console.log(c);
      this.selectedC01 = c[0];
    });

  }

  onSelectC02(event: any) {
    this.httpService.getCharByName(event?.target.value).subscribe((c)=>{
      this.selectedC02 = c[0];
    })
  }

  onAttack(): void {
    this.gameService.attack(this.selectedC01!, this.selectedC02!);

    this.historyText = this.displayService.getHistoryText();
    console.log(this.historyText)

  }

}

