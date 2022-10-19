import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users2Component } from './users2.component';

describe('Users2Component', () => {
  let component: Users2Component;
  let fixture: ComponentFixture<Users2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Users2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Users2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
