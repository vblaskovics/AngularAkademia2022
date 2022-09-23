import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/model/character';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.css'],
})
export class SelectCharacterComponent implements OnInit {
  selectedChar1!: Character;
  selectedChar2!: Character;

  characters$!: Observable<Character[]>;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters();
  }

  onSelectChar1() {
    console.log('selectedChar1', this.selectedChar1);
  }

  onSelectChar2() {
    console.log('selectedChar2', this.selectedChar2);
  }
}
