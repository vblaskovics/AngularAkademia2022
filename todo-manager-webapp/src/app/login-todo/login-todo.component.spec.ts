import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTodoComponent } from './login-todo.component';

describe('LoginTodoComponent', () => {
  let component: LoginTodoComponent;
  let fixture: ComponentFixture<LoginTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
