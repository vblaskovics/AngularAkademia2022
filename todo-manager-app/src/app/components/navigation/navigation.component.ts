import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  count?: number
  todoTemplate: Todo;
  myForm: FormGroup;
  todoStart: boolean

  constructor(fb: FormBuilder, private todoService: TodoService) { 
    this.todoTemplate= {id: 1, title: "This is sample todo", progress: "in progress", description: "This is a sample", date: "2022-08-17", user_id:1, subTodoIds: []},
    this.myForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)] ] 
    }),
    this.todoStart = true
  }

  ngOnInit(): void {
    this.count = this.todoService.numberOfInProgessTodos()
  }

  onAddTodo() {
    this.createTodo();
    this.resetForm()
  }

  createTodo(): void{
    this.todoTemplate.id = this.todoService.todosBasic.length + 1;
    this.todoTemplate.title = this.myForm.value.title
    let newObject = {...this.todoTemplate}
    if(this.todoService.isBasicTodoListType || this.todoStart){
      this.todoService.todosBasic.push(newObject)
      this.todoStart = false;
      this.todoService.isBasicTodoListType = true;
    } else {
      this.todoService.todos2.push(newObject)
    }
  }

  resetForm(): void {
    this.myForm.reset()
  }
}
