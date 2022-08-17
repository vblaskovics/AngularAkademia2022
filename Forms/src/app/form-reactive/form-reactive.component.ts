import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  myForm: FormGroup;
  email: string = '';


  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      username: ['Amanda'], //form control a groupon belül - ezt is rákötjük a template-re, inputra. formControlName="username"
      email: ['amanda01@email.com'],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log('form value', this.myForm.value);
  }

  onClickMyFormValue(){
    console.log('form value', this.myForm.value);
  }

  onErase(){
    this.myForm.reset();
  }

  getUsername(): void{
    console.log(this.myForm.get('username')?.value)
  }

  getEmail(): void{
    console.log(this.myForm.get('email')?.value)
  }

  onResetForm(){
    this.myForm.reset({
      'username': 'username',
      'email': 'email'
    });
  }

  onSetForm(){
    this.myForm.setValue({
      'username': 'Chubakka',
      'email': 'chubakka01@valami.hu'
    })
  }

  onPatchValue(){ //egy valamit változtat
    this.myForm.patchValue({
      username: 'Chubakka',
    })
  }
  
}
