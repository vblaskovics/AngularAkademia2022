import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUser2Component } from './random-user2.component';

describe('RandomUser2Component', () => {
  let component: RandomUser2Component;
  let fixture: ComponentFixture<RandomUser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUser2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
