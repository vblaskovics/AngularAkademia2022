import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiderComponent } from './hider.component';

describe('HiderComponent', () => {
  let component: HiderComponent;
  let fixture: ComponentFixture<HiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
