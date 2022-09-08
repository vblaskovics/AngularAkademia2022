import { FormControl } from '@angular/forms';

export interface LoginFormModel {
  userName: FormControl<string>;
  password: FormControl<string>;
}
