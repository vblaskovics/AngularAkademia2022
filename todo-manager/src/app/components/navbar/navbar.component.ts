import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { todos } from 'src/app/mock/todo-mock';
import { Progress } from 'src/app/users-model/progress-enum';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;
  todos = todos;
  @Output() showSignInForm: EventEmitter<boolean> = new EventEmitter();
  isDisplayed: boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    })
  }

  showForm(): void {
    this.isDisplayed = !this.isDisplayed;
    this.showSignInForm.emit(this.isDisplayed);
  }

  ngOnInit(): void {
  }

  countInProgressTodos(): number {
    let count = 0;
    this.todos.forEach((current: Todo) => {
      if (current.progress == Progress.IN_PROGRESS) {
        count++;
      }
    });
    return count;
  }

  onSubmit():void {
    let newTodo = {
      title: this.myForm.value['title'],
      id: todos.length+1,
      progress: Progress.OPEN,
      description: 'sleep',
      date: '2022-10-18',
      userId: 2,
      subTodoIds: [1, 2],
    }
      this.todos.push(newTodo);
    }

    isValid(): void {
      this.submitted = true;
      if(this.myForm.invalid) {
        return;
      }
      console.log(this.myForm.value['title']);
    }


    get form() {
      return this.myForm.controls;
    }

    get todoTitle(): FormControl {
      return this.myForm.get('title') as FormControl;
    }

    onSignIn(): void {
      this.todos.splice
    }



}
