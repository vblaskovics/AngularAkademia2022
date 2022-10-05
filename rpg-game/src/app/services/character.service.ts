import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  char1?: BehaviorSubject<Character | null> = new BehaviorSubject<Character | null >(null)
	char2?: BehaviorSubject<Character | null> = new BehaviorSubject<Character | null >(null)

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('http://localhost:3000/characters').pipe(
      map(chars => {
        let charsArray: Character[] = []
        chars.forEach(char => charsArray.push(char))
        return charsArray
      })
    )
  }
}
