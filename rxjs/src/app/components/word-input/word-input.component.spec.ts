import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInputComponent } from './word-input.component';

describe('WordInputComponent', () => {
  let component: WordInputComponent;
  let fixture: ComponentFixture<WordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
