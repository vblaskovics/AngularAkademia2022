import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContiniousCounterComponent } from './continious-counter.component';

describe('ContiniousCounterComponent', () => {
  let component: ContiniousCounterComponent;
  let fixture: ComponentFixture<ContiniousCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContiniousCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContiniousCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
