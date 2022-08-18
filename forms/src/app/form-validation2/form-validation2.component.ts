import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation2',
  templateUrl: './form-validation2.component.html',
  styleUrls: ['./form-validation2.component.css']
})
export class FormValidation2Component implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstname: ['',
        [
          Validators.required,
          Validators.pattern(/^[A-Z]/)
        ]
      ],
      lastname: ['',
        [
          Validators.required,
          Validators.pattern(/^[A-Z]/)
        ]
      ],
      username: ['',
        [
          Validators.required,
          Validators.pattern(/[a-z0-9]/),
          Validators.minLength(4)
        ]
      ],
      zip: ['',
        [
          Validators.min(1000),
          Validators.max(9999)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/\.@#*/)
        ]
      ]
    })
  }

  ngOnInit(): void {
  }

  get firstname(): FormControl {
    return this.myForm.get('firstname') as FormControl;
  }

  onSubmit() {
    debugger
    console.log("igen")
   /*  if (this.myForm.valid) {
      console.log(this.myForm.value); //submit gombra kattintva hibaüzenetet dob, most ki van kapcsolva a gomb (több input mezőnél a gombos hibaüzenet jobb)
    } else {
      this.myForm.markAllAsTouched();
    }; */

  }

}
