import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFiveCounterComponent } from './custom-five-counter.component';

describe('CustomFiveCounterComponent', () => {
  let component: CustomFiveCounterComponent;
  let fixture: ComponentFixture<CustomFiveCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFiveCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFiveCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
