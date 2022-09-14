import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timer2Component } from './timer2.component';

describe('Timer2Component', () => {
  let component: Timer2Component;
  let fixture: ComponentFixture<Timer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Timer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
