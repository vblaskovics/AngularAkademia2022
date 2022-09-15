import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elapsed2Component } from './elapsed2.component';

describe('Elapsed2Component', () => {
  let component: Elapsed2Component;
  let fixture: ComponentFixture<Elapsed2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Elapsed2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elapsed2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
