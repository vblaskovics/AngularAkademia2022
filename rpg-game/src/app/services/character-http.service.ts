import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../model/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterHttpService {

  readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(this.BASE_URL);
  }
  
}
