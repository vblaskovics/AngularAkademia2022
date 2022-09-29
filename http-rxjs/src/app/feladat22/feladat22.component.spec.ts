import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feladat22Component } from './feladat22.component';

describe('Feladat22Component', () => {
  let component: Feladat22Component;
  let fixture: ComponentFixture<Feladat22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feladat22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feladat22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
