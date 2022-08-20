import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTodoReactiveComponent } from './login-todo-reactive.component';

describe('LoginTodoReactiveComponent', () => {
  let component: LoginTodoReactiveComponent;
  let fixture: ComponentFixture<LoginTodoReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTodoReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTodoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
