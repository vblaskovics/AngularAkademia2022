import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feladat222Component } from './feladat222.component';

describe('Feladat222Component', () => {
  let component: Feladat222Component;
  let fixture: ComponentFixture<Feladat222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feladat222Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feladat222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
