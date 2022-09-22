import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharacterService } from './character.service';
import { HttpClient } from '@angular/common/http';

import { Character } from '../interfaces/character';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService, HttpClient]
    });
    service = TestBed.inject(CharacterService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get characters', () => {
    const mockCharacters = [
      {name: 'Jack', attack: 1, defense: 2, hp: 3},
      {name: 'Jill', attack: 4, defense: 5, hp: 6},
    ];

    service.getCharacters().subscribe((characters:Character[]) => {
      expect(characters.length).toBe(2);
      expect(characters).toEqual(mockCharacters);
    });

    const req = httpTestingController.expectOne(service.API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacters);
  });

  it('should get character names', () => {
    const mockCharacters = [
      {name: 'Jack', attack: 1, defense: 2, hp: 3},
      {name: 'Jill', attack: 4, defense: 5, hp: 6},
    ];

    service.getCharacterNames().subscribe((characterNames:string[]) => {
      expect(characterNames.length).toBe(2);
      expect(characterNames).toEqual(['Jack', 'Jill']);
    });

    const req = httpTestingController.expectOne(service.API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacters);
  });

  it('should get character by name', () => {
    const mockCharacter = {name: 'Jack', attack: 1, defense: 2, hp: 3};

    service.getCharacterByName('Jack').subscribe((character:Character) => {
      expect(character).toEqual(mockCharacter);
    });

    const req = httpTestingController.expectOne(service.API_URL + '?name=Jack');
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacter);
  });

});
