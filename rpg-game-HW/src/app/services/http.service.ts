import { Character } from '../models/character';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly BASE_URL = "http://localhost:3000/characters";
  characters: Character[] = [];

  constructor(private http: HttpClient) { }

  public getChars(): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.BASE_URL}`)
  }

  // getChar(id: number): Observable<Character> {
  //   return this.http.get<Character>(`${this.BASE_URL}?name=${id}`);
  // }

  getCharNames(): Observable<any> {
    return this.getChars().pipe
    (map((chars)=>{
      chars.map(chars=> chars.name)
    }))
  }
  

  getCharByName(name: string): Observable<Character> {
    return this.http.get<Character>(`${this.BASE_URL}?name=${name}`);
  }

  // public postChars(characters: Character): Observable<Character>{
  //   return this.http.post<Character>(this.BASE_URL + '/characters', characters );
  // }


}
