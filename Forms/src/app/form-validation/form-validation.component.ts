import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  myForm: FormGroup;
  // formUsername: FormControl | null ;
  // formEmail: FormControl | null;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    });
    
    // this.formUsername = this.myForm.get('username') as FormControl;
    // this.formEmail = this.myForm.get('email') as FormControl;

   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.myForm);
  }

  // onPatchValue(){
  //   this.myForm.patchValue({
  //     'username': 'required*',
  //     'email': 'required*'
  //   });
  // } nem kell a submit gombon lévő disabled prop. miatt

  onReset(){
    this.myForm.reset();
  }

  
}
