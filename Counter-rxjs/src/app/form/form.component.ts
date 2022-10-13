import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  word: string = '';
  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      text: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6), Validators.pattern(/^[a-z]{4-6}/)]],
    });
  }

  ngOnInit(): void {
  }

  get text(): FormControl{
    return this.myForm.get('text') as FormControl
  }
  onSubmit(){

  }

}
