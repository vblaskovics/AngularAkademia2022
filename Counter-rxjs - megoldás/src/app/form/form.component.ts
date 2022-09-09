import { CounterServiceService } from './../counter-service.service';
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

  inputWord: string = '';
  myForm: FormGroup;

  constructor(fb: FormBuilder, private counterService: CounterServiceService) { 
    this.myForm = fb.group({
      text: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get text(): FormControl{
    return this.myForm.get('text') as FormControl
  }

  onSubmit(){
    this.counterService.comparingWords(this.inputWord);
    this.myForm.reset();
  }

}
