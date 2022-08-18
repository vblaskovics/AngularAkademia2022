import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  myForm: FormGroup
  username: any;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['' ,Validators.required]
    });


   }

  ngOnInit(): void {
    // this.username = new FormGroup({
    //   name: new FormControl(this.username.name, [
    //     Validators.required,
    //     Validators.minLength(4),
    //      // <-- Here's how you pass in the custom validator.
    //   ]),

    // });

  }

  onSubmit(): void {
    console.log(this.myForm)
    console.log(this.username)
    }
  }
