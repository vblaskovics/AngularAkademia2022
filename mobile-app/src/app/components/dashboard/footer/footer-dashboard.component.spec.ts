import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDashboardComponent } from './footer-dashboard.component';

describe('FooterComponent', () => {
  let component: FooterDashboardComponent;
  let fixture: ComponentFixture<FooterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
