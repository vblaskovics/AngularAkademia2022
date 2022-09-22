import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserAnotherComponent } from './random-user-another.component';

describe('RandomUserAnotherComponent', () => {
  let component: RandomUserAnotherComponent;
  let fixture: ComponentFixture<RandomUserAnotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUserAnotherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUserAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
