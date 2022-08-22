import { AbstractControl, ValidationErrors,  } from "@angular/forms";

export class PasswordValidators {
    cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf('') >=0)
      return { cannotContainSpace: true};

      return null;

  }
  static passwordsShouldMatch: any;
  passwordsShouldMatch(control: AbstractControl) {
    let password = control.get('password');
    let passwordre = control.get('passwordre');

    if (password?.value !== passwordre?.value)
      return { passwordsShouldMatch: true };
        return null;
}

}


// Ez egy Custom Validator akar lenni
