import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
<<<<<<< HEAD

  onSubmit(formValue: any): void {
    console.log('form value:', formValue);
  }

=======
  onSubmit(formValue: any): void{
    console.log(formValue);
  }
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
}
