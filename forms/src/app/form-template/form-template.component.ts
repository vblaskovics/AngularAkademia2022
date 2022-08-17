import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(e: any) {
    console.log(e);
  }
}
