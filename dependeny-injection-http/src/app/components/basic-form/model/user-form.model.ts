import { FormControl } from '@angular/forms';

export interface UserFormModel { //form típusossá tétele
    first_name: FormControl<string>;
    last_name: FormControl<string>;
    email: FormControl<string>;
    gender: FormControl<string>;
  
}