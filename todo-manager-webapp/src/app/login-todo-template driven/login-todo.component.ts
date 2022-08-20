import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-todo',
  templateUrl: './login-todo.component.html',
  styleUrls: ['./login-todo.component.css']
})

export class LoginTodoComponent implements OnInit {

  log(x: any) { console.log(x); }

  submit(f: any) {console.log(f);}

  constructor() { }

  ngOnInit(): void {
  }

}
