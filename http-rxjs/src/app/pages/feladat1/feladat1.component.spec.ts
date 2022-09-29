import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feladat1Component } from './feladat1.component';

describe('Feladat1Component', () => {
  let component: Feladat1Component;
  let fixture: ComponentFixture<Feladat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feladat1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feladat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
