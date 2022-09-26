import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterService } from 'src/app/services/character.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from 'src/app/services/http.service';

import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {

  let httpService: HttpService;
  let characterService: CharacterService;
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersComponent ]
    })
    .compileComponents();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, CharacterService]
    });

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpService = TestBed.inject(HttpService);
    characterService = TestBed.inject(CharacterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get characters', () => {
    expect(component.getCharacters).toBeTruthy();
  });

  it('should select characters', () => {
    expect(component.onSelect).toBeTruthy();
  });

  it('should check if character is selected', () => {
    expect(component.isSelected).toBeTruthy();
  });


});
