import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegistrationModel } from "./model/user-registration-form.model";

export class RegistrationForm extends FormGroup<RegistrationModel> {
  constructor(){
    super({
      FirstName: new FormControl<string>(
        '',
        {nonNullable: true, validators:[Validators.required,Validators.pattern(/^[A-Z][a-z]+/)],}
      ),
      LastName: new FormControl<string>(
        '',
        {nonNullable: true, validators:[Validators.required,Validators.pattern(/^[A-Z][a-z]+/)],}
      ),
      Username: new FormControl<string>(
        '',
        {nonNullable: true, validators:[Validators.required,Validators.required, Validators.pattern(/[a-zá-ű0-9]+/), Validators.minLength(4)],}
      ),
      ZipCode: new FormControl<string>(
        '',
        {nonNullable: true, validators:[Validators.required,Validators.min(1000), Validators.max(9999)],}
      ),
      Password: new FormControl<string>(
        '',
        {nonNullable: true, validators:[Validators.required,Validators.required, Validators.minLength(8), Validators.pattern(/[a-zA-Z]+[@#]+/)],}
      )
    })
  }
}
