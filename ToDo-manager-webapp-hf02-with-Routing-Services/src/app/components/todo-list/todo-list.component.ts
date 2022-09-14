import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo, progress } from 'src/app/models/todo';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items!: Todo[];
  todoSelected?: Todo;

  //sort és a headerben való megjelenítés:
  // sortItems?: Todo[];
  // sortRaisingTodos: string[] = [progress.Open, progress.InProgress, progress.Done];
  // sortDecraisingTodos: string[] = [progress.Open, progress.InProgress, progress.Done]
  // TodosInProgress: number = 0;
  // lastNumInProgress: number = 0;
  wichElementSelected;


  constructor(public todoService: TodoService) { 
    this.wichElementSelected = this.todoService.wichElementSelected
  
  }

  ngOnInit(): void {
    this.items = this.todoService.items;
  }

  // onSelectedItem(itemSelected: Todo){
  //   this.todoService.onSelectedItem(itemSelected)
  // }

  closeDetails(event: boolean){
    this.wichElementSelected = !event;
  }


  //státusz átállítása:

  // actualProgressItem(todo: Todo){
  //   const todoIndex = this.items.indexOf(todo);
  //   if (this.items[todoIndex].progress === progress.Open) {
  //     this.items[todoIndex].progress = progress.InProgress;
  //   }
  //    else if(this.items[todoIndex].progress === progress.InProgress) {
  //     this.items[todoIndex].progress = progress.Done;
  //   }
  //    else if (this.items[todoIndex].progress === progress.Done) {
  //     this.items[todoIndex].progress = progress.Open;
  //   }
  // }


  // actualProgressItemDetails(todo: Todo) {
  //   const todoIndex = this.items.indexOf(todo);
  //   if (this.items[todoIndex].progress === progress.Open){
  //     this.items[todoIndex].progress === progress.InProgress;
  //   }
  //     else if(this.items[todoIndex].progress === progress.InProgress){
  //       this.items[todoIndex].progress === progress.Done;
  //     }
  //     else if (this.items[todoIndex].progress === progress.Done){
  //       this.items[todoIndex].progress === progress.Open
  //     }
  //     console.log('Működik a parent comp!')
  // }



  // //sort beállítása:

  // onSortReasing() {
  //   const result = this.items.sort((a,b) => this.sortRaisingTodos.indexOf(a.progress) - this.sortRaisingTodos.indexOf(b.progress))
    
  // }
  // onSortDecreasing() {
  //   const result = this.items.sort((a,b) => this.sortDecraisingTodos.indexOf(a.progress) - this.sortDecraisingTodos.indexOf(b.progress))
  // }

  // inProgressItem() {
  //   for (let i = 0; i < this.items.length; i++) {
  //     const element = this.items[i];
  //     if (element.progress == progress.InProgress) {
  //       this.lastNumInProgress++;
  //     }
  //   }
  //   this.TodosInProgress = this.lastNumInProgress;
  //   this.lastNumInProgress = 0;
  // }


  // currentProgOfItem(event: Todo) {
  //   const todoIndex = this.items.indexOf(event);
  //   if (this.items[todoIndex].progress === progress.Done) {
  //     this.items[todoIndex].progress = progress.Open;
  //   }
  //    else if (this.items[todoIndex].progress === progress.Open) {
  //     this.items[todoIndex].progress = progress.InProgress;
  //   }
  //    else if (this.items[todoIndex].progress === progress.InProgress) {
  //     this.items[todoIndex].progress = progress.Done;
  //   }
  //   this.inProgressItem();
  // }

  // deleteItemfromList(todo:Todo): void {
  //   this.items = this.items.filter(a => a.id !== todo.id)
  // }



  // newTodoInList(newTodo: Todo){
  //   console.log('működik a newTodoInList');
  //   return this.items.push(newTodo);
  // }
  

}

  