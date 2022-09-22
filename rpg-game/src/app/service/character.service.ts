import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url: string = "http://localhost:3000/characters";

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url);
  }
}
