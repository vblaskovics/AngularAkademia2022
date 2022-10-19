import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { TodoLoginPageComponent } from './todo-login-page.component';

describe('TodoLoginPageComponent', () => {
  let component: TodoLoginPageComponent;
  let fixture: ComponentFixture<TodoLoginPageComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoLoginPageComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in', () => {
    const usernameInput: HTMLInputElement = el.querySelector('#username');
    const passwordInput: HTMLInputElement = el.querySelector('#password');

    usernameInput.value = 'user';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.value = 'password';
    passwordInput.dispatchEvent(new Event('input'));

    const form: HTMLFormElement = el.querySelector('#loginForm');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(el.querySelector('#logout'))
      .withContext('Log out button should appear after succesful log in')
      .toBeTruthy();
  });
});
