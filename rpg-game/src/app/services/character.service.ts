import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character';
import {
  BehaviorSubject,
  filter,
  from,
  map,
  Observable,
  Subject,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggerService } from './logger.service';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  firstCharacter$: Subject<Character | null> = new Subject<Character | null>();
  secondCharacter$: Subject<Character | null> = new Subject<Character | null>();
  characters$: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>(
    []
  );
  constructor(private http: HttpClient, private logService: LoggerService) {
    this.getCharacters();
  }
  getCharacters() {
    this.http
      .get<Character[]>(environment.api + '/characters')
      .subscribe((characters: Character[]) => {
        this.characters$.next(characters);
      });
  }
  getCharacter(id: number): Observable<Character | null> {
    return this.characters$.pipe(
      map((characters: Character[]) => {
        let i = 0;

        while (i < characters.length && characters[i].id != id) {
          i++;
        }
        return i < characters.length ? { ...characters[i] } : null;
      })
    );
  }
  getFirstCharacter(id: number) {
    this.getCharacter(id).subscribe(
      (ch: Character | null) => {
        this.logService.log(`player 1 selected ${ch?.name}`);
        this.firstCharacter$.next(ch);
      },
      (error) => {
        this.firstCharacter$.next(null);
      }
    );
  }
  getSecondCharacter(id: number) {
    this.getCharacter(id).subscribe(
      (ch: Character | null) => {
        this.logService.log(`player 2 selected ${ch?.name}`);

        this.secondCharacter$.next(ch);
      },
      (error) => {
        this.firstCharacter$.next(null);
      }
    );
  }
}
