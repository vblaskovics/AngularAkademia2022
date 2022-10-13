import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBoxesComponent } from './black-boxes.component';

describe('BlackBoxesComponent', () => {
  let component: BlackBoxesComponent;
  let fixture: ComponentFixture<BlackBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
