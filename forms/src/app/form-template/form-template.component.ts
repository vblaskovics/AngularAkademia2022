import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  inputValues: any = [];
  email: any;
  username: any;
  addInputValues: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(formValue: any): void {
    this.username = formValue.username;
    this.email = formValue.emailaddress;
    this.addInputValues = true;
    this.inputValues.push(this.username, this.email)
  }

}
