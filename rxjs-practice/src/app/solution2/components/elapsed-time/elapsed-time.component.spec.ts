import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElapsedTimeComponent } from './elapsed-time.component';

describe('ElapsedTimeComponent', () => {
  let component: ElapsedTimeComponent;
  let fixture: ComponentFixture<ElapsedTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElapsedTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElapsedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
