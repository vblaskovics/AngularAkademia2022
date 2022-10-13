import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageInfoComponent } from './wage-info.component';

describe('WageInfoComponent', () => {
  let component: WageInfoComponent;
  let fixture: ComponentFixture<WageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
