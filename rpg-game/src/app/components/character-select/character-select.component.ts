import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {

  @Input() character$!: BehaviorSubject<Character | null>;
  @Input() names$ = this.characterService.getCharacterNames();

  constructor(private characterService:CharacterService, private gameService:GameService) { }

  ngOnInit(): void {
  }

  onSelect(event:any): void {
    if (!event) return;
    if (event) {
      this.characterService.getCharacterByName(event.target.value).subscribe((character) => {
        console.log(character[0])
        this.character$.next(character[0]);
      });
    }
  }

}
