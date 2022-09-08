import { FormControl } from "@angular/forms";

export interface RegistrationModel {
  FirstName: FormControl<string>;
  LastName: FormControl<string>;
  Username: FormControl<string>;
  ZipCode: FormControl<string>;
  Password: FormControl<string>;
}
