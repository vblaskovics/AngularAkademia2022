import { Component, OnInit } from '@angular/core';
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

  constructor(private characterHttp: CharacterHttpService) { }

  ngOnInit(): void {
  //this.characterHttp.getCharacter().subscribe((data) => console.log(data));
  this.characters$ = this.characterHttp.getCharacter();
  }

  selectCharacter(event: any) {
    console.log(event.target.value);
  }



}
