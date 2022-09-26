import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  //store characters in an array
  charactersArray: Character[] = [];

  selectedCharactersArray: Character[] = [];


}
