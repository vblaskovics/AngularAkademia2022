import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/model/character';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.css']
})
export class SelectCharacterComponent implements OnInit {

  selectedValue!: Character;

  characters$!: Observable<Character[]>;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters();
  }

  onSelect() {
    /* this.selectedValue = char; */
    console.log("selectedValue", this.selectedValue);
  }

}
