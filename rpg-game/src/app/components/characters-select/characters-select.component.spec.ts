import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSelectComponent } from './characters-select.component';

describe('CharactersSelectComponent', () => {
  let component: CharactersSelectComponent;
  let fixture: ComponentFixture<CharactersSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render a character select', () => {
  //   let char1 = {name: 'Ork', hp: 3, attack: 5, defense: 4}

  // })
});
