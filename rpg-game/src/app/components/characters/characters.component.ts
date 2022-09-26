import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    public characterService: CharacterService
  ) {}

    chars!: Observable<Character[]>;

  ngOnInit(): void {
    this.chars = this.httpService.getCharacters();
  }

  getCharacters() {
    this.httpService.getCharacters().subscribe((data) => {
      this.characterService.charactersArray = data;
    });
  }

  onSelect(character: Character) {
    if (this.characterService.selectedCharactersArray.includes(character)) {
      this.characterService.selectedCharactersArray =
        this.characterService.selectedCharactersArray.filter(
          (c) => c !== character
        );
      console.log(this.characterService.selectedCharactersArray, 'removed');
    } else if (this.characterService.selectedCharactersArray.length < 2) {
      this.characterService.selectedCharactersArray.push(character);
      console.log(this.characterService.selectedCharactersArray, 'added');
    }
  }

  isSelected(character: Character) {
    return this.characterService.selectedCharactersArray.includes(character);
  }
}
