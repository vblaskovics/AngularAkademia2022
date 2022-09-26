import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSelectorContainerComponent } from './character-selector-container.component';

describe('CharacterSelectorContainerComponent', () => {
  let component: CharacterSelectorContainerComponent;
  let fixture: ComponentFixture<CharacterSelectorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSelectorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSelectorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
