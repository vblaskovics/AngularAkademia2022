import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API = environment.apiUrl;
  baseURL= environment.apiUrl + '/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.API + '/characters');
  }

  getCharacterByName(name: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseURL}?name=${name}`);
  }
}
