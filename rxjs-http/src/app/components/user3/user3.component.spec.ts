import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User3Component } from './user3.component';

describe('User3Component', () => {
  let component: User3Component;
  let fixture: ComponentFixture<User3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
