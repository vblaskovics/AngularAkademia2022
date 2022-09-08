import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerBoxComponent } from './timer-box.component';

describe('TimerBoxComponent', () => {
  let component: TimerBoxComponent;
  let fixture: ComponentFixture<TimerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
