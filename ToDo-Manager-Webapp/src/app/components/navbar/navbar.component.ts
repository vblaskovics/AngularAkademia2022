import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() inProgressCounter?: number;
  @Output() isSignInClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  todoTitleForm: FormGroup;
  isSignInButtonClicked: boolean = false;

  constructor(fb: FormBuilder) {
    this.todoTitleForm = fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  handleNewTodoForm(): void {
    if (this.todoTitleForm.valid) {
      console.log(this.todoTitleForm.value);
    } else {
      this.todoTitleForm.markAllAsTouched();
    }
  }

  get todoTitle(): FormControl {
    return this.todoTitleForm.get('title') as FormControl;
  }

  onSignInClicked(signIn: boolean): void {
    this.isSignInClicked.emit(signIn);
  }
}
