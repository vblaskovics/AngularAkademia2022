import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logger2Component } from './logger2.component';

describe('Logger2Component', () => {
  let component: Logger2Component;
  let fixture: ComponentFixture<Logger2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Logger2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logger2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
