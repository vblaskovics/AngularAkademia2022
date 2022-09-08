import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginServiceService } from 'src/app/services/login-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css'],
})
export class TodoNavbarComponent implements OnInit {
  myForm: FormGroup;
  IsValidForm: boolean = false;

  navigateToLogin: boolean = true;

  @Input() numberofTodos?: number;
  @Output() titleS: EventEmitter<string> = new EventEmitter<string>();
  constructor(fb: FormBuilder, public loginService: LoginServiceService) {
    this.myForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    });
  }
  get title(): FormControl {
    return this.myForm.get('title') as FormControl;
  }
  ngOnInit(): void {}

  onSubmit() {
    this.titleS.emit(this.myForm.value.title);
  }
  onReset() {
    this.myForm.reset();
  }
  handler() {
    console.log(this.title.errors);

    if (this.myForm.status === 'INVALID') {
      console.log(this.myForm.status);
      this.IsValidForm = true;

    } else {
      this.IsValidForm =false;
      this.onSubmit();
      this.onReset();
    }
  }
}
