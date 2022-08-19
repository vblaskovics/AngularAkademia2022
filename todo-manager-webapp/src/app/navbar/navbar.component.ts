import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() title!: string;
  @Input() counter!: number;
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      title: [''],
      createTodo: ['' ,]
    });
  }

  ngOnInit(): void {

  }

  onCreate(): void {
    console.log('title', this.myForm.value);
    this.myForm.reset();
  }

  getTodo(): FormControl {
      return this.myForm.get('title') as FormControl

  }
}