import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSite2Component } from './user-site2.component';

describe('UserSite2Component', () => {
  let component: UserSite2Component;
  let fixture: ComponentFixture<UserSite2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSite2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
