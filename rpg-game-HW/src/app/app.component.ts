import { Observable } from 'rxjs';
import { HttpService } from './services/http.service';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';
import { Character } from './models/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // chars?: Character[]
  // chars$: Observable<Character[]> = this.httpService.getChars();
  // historyText: string = ""

  // c1!: Character;
  // c2!: Character;

  constructor(private gameService: GameService, private displayService: DisplayService, public httpService: HttpService) { 
    }

  ngOnInit(): void {
    // let id = 1;
    // this.httpService.getChar(id).subscribe((c) => {
    //   this.chars = c;
    // })
  }
  

  
  }

