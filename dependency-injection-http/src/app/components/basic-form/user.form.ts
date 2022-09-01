import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserFormModel } from "./model/user-form.model";

export class UserForm extends FormGroup<UserFormModel> {

    constructor() {
        super({
            first_name: new FormControl<string>(
                '',
                {nonNullable: true ,validators: [Validators.required]}
            ),
            last_name: new FormControl<string>(
                '',
                {nonNullable: true ,validators: [Validators.required]}
            ),
            email: new FormControl<string>(
                '',
                {nonNullable: true ,validators: [Validators.required]}
            ),
            gender: new FormControl<string>(
                '',
                {nonNullable: true, validators:[Validators.required]}
            )
        })
    }
}