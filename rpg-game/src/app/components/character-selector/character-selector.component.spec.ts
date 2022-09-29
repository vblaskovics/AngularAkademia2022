import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSelectorComponent } from './character-selector.component';

describe('CharacterSelectorComponent', () => {
  let component: CharacterSelectorComponent;
  let fixture: ComponentFixture<CharacterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
