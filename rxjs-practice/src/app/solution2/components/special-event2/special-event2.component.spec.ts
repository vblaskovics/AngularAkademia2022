import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEvent2Component } from './special-event2.component';

describe('SpecialEvent2Component', () => {
  let component: SpecialEvent2Component;
  let fixture: ComponentFixture<SpecialEvent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialEvent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialEvent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
