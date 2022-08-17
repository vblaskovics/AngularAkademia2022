import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  

  constructor() {
    
   }

  ngOnInit(): void {
  }

  onSubmit(formValue: string): void{
    console.log('Formvalue',formValue);
  }

}
