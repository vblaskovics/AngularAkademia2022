import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-chooser',
  templateUrl: './character-chooser.component.html',
  styleUrls: ['./character-chooser.component.scss'],
})
export class CharacterChooserComponent implements OnInit {
  characters$: Observable<Character[]>;
  constructor(private characterService: CharacterService) {
    this.characters$ = characterService.characters$;
    this.characterService.getCharacter(0);
  }

  ngOnInit(): void {}
  selectFirstCharacter(characterid: number) {
    this.characterService.getFirstCharacter(characterid);
  }

  selectSecondCharacter(characterid: number) {
    this.characterService.getSecondCharacter(characterid);
  }
}
