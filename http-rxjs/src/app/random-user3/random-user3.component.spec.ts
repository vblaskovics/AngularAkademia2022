import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUser3Component } from './random-user3.component';

describe('RandomUser3Component', () => {
  let component: RandomUser3Component;
  let fixture: ComponentFixture<RandomUser3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUser3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUser3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
