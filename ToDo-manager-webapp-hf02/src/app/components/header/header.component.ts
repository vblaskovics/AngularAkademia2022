import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() todoCounter?: number;
  @Input() todo?: Todo;
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      todoID: ['', 
      [Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(40)
      ]
    ],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.myForm.value);
  }

  
  get todoID():FormControl{
    return this.myForm.get('todoID') as FormControl
  }


  onReset() {
    console.log('form value in TodoApp is working: ', this.myForm.value);
    this.myForm.reset();
  }

  onSignIn(){
    console.log(this.myForm.value)
  }
}
