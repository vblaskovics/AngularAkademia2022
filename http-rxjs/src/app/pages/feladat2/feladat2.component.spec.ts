import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feladat2Component } from './feladat2.component';

describe('Feladat2Component', () => {
  let component: Feladat2Component;
  let fixture: ComponentFixture<Feladat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feladat2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feladat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
