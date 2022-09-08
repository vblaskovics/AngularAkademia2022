import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBoxComponent } from './score-box.component';

describe('ScoreBoxComponent', () => {
  let component: ScoreBoxComponent;
  let fixture: ComponentFixture<ScoreBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
