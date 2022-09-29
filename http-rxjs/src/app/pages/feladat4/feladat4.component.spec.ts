import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feladat4Component } from './feladat4.component';

describe('Feladat4Component', () => {
  let component: Feladat4Component;
  let fixture: ComponentFixture<Feladat4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feladat4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feladat4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
