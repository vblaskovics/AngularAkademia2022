import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLogger2Component } from './time-logger2.component';

describe('TimeLogger2Component', () => {
  let component: TimeLogger2Component;
  let fixture: ComponentFixture<TimeLogger2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLogger2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLogger2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
