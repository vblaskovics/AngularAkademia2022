import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feladat5Component } from './feladat5.component';

describe('Feladat5Component', () => {
  let component: Feladat5Component;
  let fixture: ComponentFixture<Feladat5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feladat5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feladat5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
