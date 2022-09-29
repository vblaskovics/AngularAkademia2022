import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterChooserComponent } from './character-chooser.component';

describe('CharacterChooserComponent', () => {
  let component: CharacterChooserComponent;
  let fixture: ComponentFixture<CharacterChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterChooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
