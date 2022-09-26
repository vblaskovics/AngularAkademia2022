import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  static readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${HttpService.baseUrl}/characters`);
  }


  postCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(`${HttpService.baseUrl}/characters`, character);
  }
}
