import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { todos2 } from 'src/app/todo2list';
import { todosBasic } from 'src/app/todolist';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() count?: number
  // @Output() newTodo?: Todo = new EventEmitter<Todo>()

  todoTemplate: Todo;
  myForm: FormGroup;
  todoStart: boolean
  @Input() todoListType?: boolean
  signInPage: boolean

  @Output() isSignInPage = new EventEmitter<boolean>() 

  constructor(fb: FormBuilder) { 
    this.todoTemplate= {id: 1, title: "This is sample todo", progress: "in progress", description: "This is a sample", date: "2022-08-17", user_id:1, subTodoIds: []},
    this.myForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)] ] 
    }),
    this.todoStart = true
    this.signInPage = false;
  }

  ngOnInit(): void {
  }

  onAddTodo() {
    this.createTodo();
    this.resetForm()
  }

  createTodo(): void{
    this.todoTemplate.id = todosBasic.length + 1;
    this.todoTemplate.title = this.myForm.value.title
    let newObject = {...this.todoTemplate}
    console.log(this.todoListType)
    if(this.todoListType || this.todoStart){
      todosBasic.push(newObject)
      this.todoStart = false;
      this.todoListType = true;
    } else {
      todos2.push(newObject)
    }
  }

  resetForm(): void {
    this.myForm.reset()
  }

  navigateToSignIn(): void{
    this.signInPage = true;
    this.isSignInPage.emit(this.signInPage)
  }
  navigateHome(): void{
    this.signInPage = false;;
    this.isSignInPage.emit(this.signInPage)
  }
}
