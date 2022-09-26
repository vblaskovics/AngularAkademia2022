import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDisplayComponent } from './text-display.component';

describe('TextDisplayComponent', () => {
  let component: TextDisplayComponent;
  let fixture: ComponentFixture<TextDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
