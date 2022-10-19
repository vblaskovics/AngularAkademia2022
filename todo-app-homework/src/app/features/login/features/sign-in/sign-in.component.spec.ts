import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from '../../login.module';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let el: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [LoginModule, BrowserAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input with an id of "username_input_component"', () => {
    const username_input_component = el.querySelector(
      '#username_input_component'
    );
    expect(username_input_component).toBeTruthy();
  });
  it('should have a button with an id of "submit_button"', () => {
    const button = el.querySelector('#submit_button');
    expect(button).toBeTruthy();
  });
  it('should have an input with an id of "password_input_component"', () => {
    const password_input_component = el.querySelector(
      '#password_input_component'
    );
    expect(password_input_component).toBeTruthy();
  });
  it('should have a title', () => {
    const title = el.querySelector('#title');
    console.log('title');
    expect(title).toBeTruthy();
  });
  it('submiting an empty form should reveal error messages', () => {
    const button = el.querySelector('#submit_button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(el.querySelectorAll('.required-field').length).toBeGreaterThan(0);
  });
  it('should have an error message if we use wrong username or password data', fakeAsync(() => {
    const usernameInput = el.querySelector('#username_input_component');
    const passwordInput = el.querySelector('#password_input_component');

    usernameInput.value = 'probably wrong username';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.value = 'I hope its a wrong password';
    passwordInput.dispatchEvent(new Event('input'));
    const submit_button = el.querySelector('#submit_button');
    submit_button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tick(2000);
    expect(el.querySelector('#failedLoginError')).toBeTruthy();
  }));
});
