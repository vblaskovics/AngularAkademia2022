import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { progress, Todo } from './models/todo';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked, AfterViewInit {
  title = 'todo-manager';

  @ViewChild(TodoTableComponent) viewChild!: TodoTableComponent;

  inProgressNumber = 0;

  showSignIn = false;

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      todoInput: [
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

  toggleSignIn() {
    if (!this.showSignIn) {
      this.showSignIn = true;
    } else {
      this.showSignIn = false;
    }
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log('inProgressCounter set', this.viewChild.inProgressCounter);
    this.inProgressNumber = this.viewChild.inProgressCounter;
  }

  ngAfterViewChecked() {
    console.log('inProgressCounter changed', this.viewChild.inProgressCounter);
    this.inProgressNumber = this.viewChild.inProgressCounter;
  }

  onSubmit(formValue: any): void {
    console.log('form value:', formValue);
  }

  handleButton() {
    console.log('form value:', this.myForm.status);
    this.myForm.reset();
  }

  get todoInput(): FormControl {
    return this.myForm.get('todoInput') as FormControl;
  }
}
