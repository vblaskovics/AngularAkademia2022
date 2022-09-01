import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public newUsersaved: boolean = false; //szülő gyerek kapcs - sibling komm. inut outputtal

  title = 'dependeny-injection-http';

  // onHandleUpdateUser():void{
  //   this.newUsersaved = true;
  // }

  // public resetSavedState(): void {
  //   this.newUsersaved = false;
  // }
}
