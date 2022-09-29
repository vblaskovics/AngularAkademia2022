import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFiveCounter2Component } from './custom-five-counter2.component';

describe('CustomFiveCounter2Component', () => {
  let component: CustomFiveCounter2Component;
  let fixture: ComponentFixture<CustomFiveCounter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFiveCounter2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFiveCounter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
