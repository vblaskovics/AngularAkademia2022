import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageTeamsComponent } from './wage-teams.component';

describe('WageTeamsComponent', () => {
  let component: WageTeamsComponent;
  let fixture: ComponentFixture<WageTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
