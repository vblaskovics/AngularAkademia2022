import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAreaComponent } from './display-area.component';

describe('DisplayAreaComponent', () => {
  let component: DisplayAreaComponent;
  let fixture: ComponentFixture<DisplayAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
