import { FormControl } from '@angular/forms';
export interface LoginFormModel {
    username: FormControl<string>;
    password: FormControl<string>;
}