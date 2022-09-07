import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserFormModel } from "./user-form.model";

export class UserForm extends FormGroup<UserFormModel> {

    constructor(){
        super({
            username: new FormControl<string>('',{
                nonNullable: true, 
                validators: [Validators.required],
            }),
            password: new FormControl<string>('', {
                nonNullable:true,
                validators: [Validators.required]
            })
        })
    }

}
