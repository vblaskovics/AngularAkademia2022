import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginTodoReactive2Component } from './login-todo-reactive2.component';
import { FormBuilder } from '@angular/forms';

// describe('LoginTodoReactive2Component', () => {
//   let component: LoginTodoReactive2Component;
//   let fixture: ComponentFixture<LoginTodoReactive2Component>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginTodoReactive2Component ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginTodoReactive2Component);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeFalsy();
//   });
// });

describe('LoginTodoReactive2Component', () => {
  var component: LoginTodoReactive2Component;

beforeEach(() => {
  component = new LoginTodoReactive2Component(new FormBuilder())
});
it('should create a form with 3 controls', () => {
  expect(component.form.contains('userName')).toBeTruthy();
  expect(component.form.contains('password')).toBeTruthy();
  expect(component.form.contains('passwordre')).toBeTruthy();
});
it('should make the username control required', () => {
  let control = component.form.get('userName');
   control?.setValue('');

   expect(control?.valid).toBeFalsy();
});
it('should make the password control required', () => {
  let control = component.form.get('password');
   control?.setValue('');

   expect(control?.valid).toBeFalsy();
});

});


