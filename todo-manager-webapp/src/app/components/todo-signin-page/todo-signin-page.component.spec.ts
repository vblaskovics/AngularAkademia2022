import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSigninPageComponent } from './todo-signin-page.component';

describe('TodoSigninPageComponent', () => {
  let component: TodoSigninPageComponent;
  let fixture: ComponentFixture<TodoSigninPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSigninPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
