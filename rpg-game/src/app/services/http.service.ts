import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.BASE_URL + '/characters');
  }
}
