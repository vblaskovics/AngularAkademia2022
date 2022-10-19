import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElapsedTimeSaveComponent } from './elapsed-time-save.component';

describe('ElapsedTimeSaveComponent', () => {
  let component: ElapsedTimeSaveComponent;
  let fixture: ComponentFixture<ElapsedTimeSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElapsedTimeSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElapsedTimeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
