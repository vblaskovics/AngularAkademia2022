import { FormControl } from '@angular/forms';

export interface ILoginForm {
  username: FormControl<string>;
  password: FormControl<string>;
}
