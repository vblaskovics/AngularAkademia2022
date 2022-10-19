import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test the Formgroup has all the required formcontrols', () => {
    const formControls = fixture.debugElement.nativeElement.querySelectorAll('.formControl');
    expect(formControls.length).withContext('The number of formcontrols should be:').toBe(6)
  })

  it('FormGroup shoulb be invalid if validators are not valid',() => {
    const isSignUpFormValid = component.myForm.valid
    expect(isSignUpFormValid).withContext('Should be valid:').toBeFalse()
  })

  it('check sign up form is valid when all validations are fullfilled',()=> {
    const firstNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#firstNameInput');
    const lastNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#lastNameInput');
    const userNameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usernameInput');
    const birthDateElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#birthDateInput');
    const zipElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#zipInput');
    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordInput');

    firstNameElement.value = 'Gergely';
    firstNameElement.dispatchEvent(new Event('input'))
    lastNameElement.value = 'Polonkai';
    lastNameElement.dispatchEvent(new Event('input'))
    userNameElement.value = 'polgerg';
    userNameElement.dispatchEvent(new Event('input'))
    birthDateElement.value = '';
    birthDateElement.dispatchEvent(new Event('input'))
    zipElement.value = '1188';
    zipElement.dispatchEvent(new Event('input'))
    passwordElement.value = 'password#'
    passwordElement.dispatchEvent(new Event('input'))

    const isSignUpFormValid = component.myForm.valid
    expect(isSignUpFormValid).withContext('Should be valid:').toBeTruthy()
  })

 
});
