import { FormControl } from '@angular/forms';

export interface SigninFormModel {
  username: FormControl<string>;
  password: FormControl<string>;
}
