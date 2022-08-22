import { AbstractControl } from "@angular/forms"

export class PasswordValidators {
  static passwordsShouldMatch(control: AbstractControl) {
      let password = control.get('password');
      let passwordre = control.get('passwordre');

      if (password?.value !== passwordre?.value)
        return { passwordsShouldMatch: true};
        
          return null;
  }

}
