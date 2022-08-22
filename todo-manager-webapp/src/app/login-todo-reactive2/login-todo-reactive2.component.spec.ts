import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTodoReactive2Component } from './login-todo-reactive2.component';

describe('LoginTodoReactive2Component', () => {
  let component: LoginTodoReactive2Component;
  let fixture: ComponentFixture<LoginTodoReactive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTodoReactive2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTodoReactive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
