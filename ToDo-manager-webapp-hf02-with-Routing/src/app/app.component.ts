import { Todo, progress } from 'src/app/models/todo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
   
   items: Todo[];
   todoSelected?: Todo;
 
   //sort és a headerben való megjelenítés:
   sortItems?: Todo[];
   sortRaisingTodos: string[] = [progress.Open, progress.InProgress, progress.Done];
   sortDecraisingTodos: string[] = [progress.Open, progress.InProgress, progress.Done];
   TodosInProgress: number = 0;
   lastNumInProgress: number = 0;
   wichElementSelected: boolean = false;
 
 
   constructor() { 
     this.wichElementSelected = false;
 
     this.items = [{
      id: 1,
      title: 'Accomplish the homework to the Angular Bootcamp',
      username:'Eszter',
      progress: progress.Done, 
      description: 'Create a nice web application',
      date: '2022-08-12',
      user_id: [{id: 1, name: 'Eszter', email: 'eszter.krutilla@t-systems.com'}],
      subTodoIds: [{ id: 1, title:'open VS Code', username:'Eszter',
      progress: 'done',
      description: 'Coding non stop',
        date: '2022-08-14',
        user_id:[{id: 0, name: 'Eszter', email: 'eszter.krutilla@t-systems.com'}],
        email: 'eszter.krutilla@t-systems.com'}]},
                {     
      id: 2,
      title: 'Make dinner',
      username:'Jancsi',
      progress: progress.Open, 
      description: 'Pizza Diavolo',
      date: '2022-08-13',
      user_id: [{id: 2, name: 'Jancsi', email: 'jancsi01@dummymail.com'}],
      subTodoIds: [{ id: 2, title:'Owen baked', username:'Jancsi',
        progress: 'open',
        description: 'Turn on the owen and open the window',
        date: '2022-08-15',
        user_id:[{id: 2, name: 'Jancsi', email: 'jancsi01@dummymail.com'}],
        email: 'jancsi765@dummymail.com'}]},
        {
          id: 3,
          title: 'Write an email',
          username:'Juliska',
          progress: progress.InProgress, 
          description: 'Write email to the boss',
          date: '2022-08-14',
          user_id: [{id: 3, name: 'Juliska', email: 'juliska02@dummymail.ocm'}],
          subTodoIds: [{ id: 3, title:'', username:'Juliska',
          progress: 'in progress',
        description: 'Write an email in english and in german langues as well',
        date: '2022-08-16',
        user_id:[{id: 3, name: 'Juliska', email: 'juliska02@dummymail.ocm'}],
        email: 'juliska765@dummymail.com'}]},
        {
          id: 4,
          title: 'Download movies',
          username:'Eszter',
          progress: progress.Open, 
      description: 'Download the bests movies in 2022',
      date: '2022-08-15',
      user_id: [{id: 4, name: 'Eszter', email: 'eszter.krutilla@t-systems.com'}],
      subTodoIds: [{id: 4, title:'Updating google chrome', username:'Eszter',
        progress: 'open',
        description: 'watch movies with pop corn',
        date: '2022-08-17',
        user_id:[{id: 4, name: 'Eszter', email: 'eszter.krutilla@t-systems.com'}],
        email: 'eszter.krutilla@t-systems.com'}]},
        {
          id: 5,
          title: 'Create recipes',
          username:'Jancsi',
          progress: progress.InProgress, 
          description: 'Create recipes for the Family',
          date: '2022-08-16',
          user_id: [{id: 5, name: 'Jancsi', email: 'jancsi01@dummymail.com'}],
          subTodoIds: [{ id: 5, title:'Purchase recipe book', username:'Jancsi',
        progress: 'in progress',
        description: 'write plant based recipes from internet',
        date: '2022-08-18',
        user_id:[{id: 5, name: 'Jancsi', email: 'jancsi01@dummymail.com'}],
        email: 'jancsi765@dummymail.com'}]},

        
      ];
       this.wichElementSelected = false;
       this.inProgressItem();
   
   }
 
   ngOnInit(): void {
   }
 
   onSelectedItem(itemSelected: Todo){
     this.todoSelected = itemSelected;
     return this.wichElementSelected = true;
   }
 
   closeDetails(event: boolean){
     this.wichElementSelected = !event;
   }
 
   //sort beállítása:
 
   onSortReasing() {
     const result = this.items.sort((a,b) => this.sortRaisingTodos.indexOf(a.progress) - this.sortRaisingTodos.indexOf(b.progress))
     
   }
   onSortDecreasing() {
     const result = this.items.sort((a,b) => this.sortDecraisingTodos.indexOf(a.progress) - this.sortDecraisingTodos.indexOf(b.progress))
   }
 
   inProgressItem() {
     for (let i = 0; i < this.items.length; i++) {
       const element = this.items[i];
       if (element.progress == progress.InProgress) {
         this.lastNumInProgress++;
       }
     }
     this.TodosInProgress = this.lastNumInProgress;
    //  this.lastNumInProgress = 0;
   }
 
   currentProgOfItem(event: Todo) {
     const todoIndex = this.items.indexOf(event);
     if (this.items[todoIndex].progress === progress.Done) {
       this.items[todoIndex].progress = progress.Open;
     }
      else if (this.items[todoIndex].progress === progress.Open) {
       this.items[todoIndex].progress = progress.InProgress;
     }
      else if (this.items[todoIndex].progress === progress.InProgress) {
       this.items[todoIndex].progress = progress.Done;
     }
     this.inProgressItem();
   }
 
   deleteItemfromList(todo:Todo): void {
     this.items = this.items.filter(a => a.id !== todo.id)
   }
 

 }
 
   

