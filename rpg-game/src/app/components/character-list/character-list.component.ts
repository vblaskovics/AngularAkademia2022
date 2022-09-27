import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/model/character.interface';
import { CharacterHttpService } from 'src/app/services/character-http.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters$: Observable<Character[]> = new Observable();
  selectedCharacter: Character | null = null;
  selectedCharacterTwo: Character | null = null;
  @Output() characters: EventEmitter<Character[]> = new EventEmitter();
  selectedCharacters: Character[] = [];
  @Input() characterDB: Observable<Character[]> = new Observable();

  constructor(private characterHttp: CharacterHttpService) {
   }

  ngOnInit(): void {
  //this.characterHttp.getCharacter().subscribe((data) => console.log(data));
  this.characters$ = this.characterHttp.getCharacter();
  }

  selectCharacter() {
    this.selectedCharacters.push(this.selectedCharacter!);

  }

  selectCharacterTwo() {
    this.selectedCharacters.push(this.selectedCharacterTwo!);
    this.emitCharacters();
  }

  emitCharacters() {
    this.characters.emit(this.selectedCharacters);
  }


}
