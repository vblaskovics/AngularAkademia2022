import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPostComponent } from './users-post.component';

describe('UsersPostComponent', () => {
  let component: UsersPostComponent;
  let fixture: ComponentFixture<UsersPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
