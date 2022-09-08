import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallPlayerPointsComponent } from './overall-player-points.component';

describe('OverallPlayerPointsComponent', () => {
  let component: OverallPlayerPointsComponent;
  let fixture: ComponentFixture<OverallPlayerPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallPlayerPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallPlayerPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
