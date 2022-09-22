import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly API_URL = 'http://localhost:3000/characters';

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.API_URL);
  }

  getCharacterNames(): Observable<string[]> {
    return this.getCharacters().pipe(
      map((characters) => characters.map(character => character.name))
    )
  }

  getCharacterByName(name: string): Observable<Character> {
    return this.httpClient.get<Character>(`${this.API_URL}?name=${name}`);
  }
}
