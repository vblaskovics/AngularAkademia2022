import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'injectables';
  public newUserSaved: boolean = false;
  constructor(){

  }

  public handleUserSave(): void{
    this.newUserSaved = true;
  }

  resetSavedState(){
    this.newUserSaved = false;
  }
}
