import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feladat3Component } from './feladat3.component';

describe('Feladat3Component', () => {
  let component: Feladat3Component;
  let fixture: ComponentFixture<Feladat3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feladat3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feladat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
