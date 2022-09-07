import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectiveComponent } from './protective.component';

describe('ProtectiveComponent', () => {
  let component: ProtectiveComponent;
  let fixture: ComponentFixture<ProtectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
