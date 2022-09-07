import { FormControl } from "@angular/forms";

export interface UserFormModel {
    username:FormControl<string>;
    password:FormControl<string>;
}