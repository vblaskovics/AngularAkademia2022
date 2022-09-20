import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { todos } from 'src/app/mock/todo-mock';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.css'],
})
export class EditTodoItemComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;
  idToEdit!: number;
  todos = todos;
  todoToEdit: Todo | undefined;

  constructor(fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.myForm = fb.group({
      title:['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    })
    this.activatedRoute.params.subscribe((data) => {
      this.idToEdit = data['id'];
    })
  }

  ngOnInit(): void {
   this.todoToEdit = this.todos.find((todo) =>
      todo.id == this.idToEdit,
    )
    console.log(this.todoToEdit?.title);
    this.myForm.get('title')?.setValue(this.todoToEdit?.title);
  }


  onSubmit(): void {
    this.submitted = true;
  }

  get form() {
    return this.myForm.controls;
  }

  get todoTitle(): FormControl {
    return this.myForm.get('title') as FormControl;
  }

  editTodo() {
    this.todoToEdit!.title = this.myForm.get('title')?.value;
  }
}
