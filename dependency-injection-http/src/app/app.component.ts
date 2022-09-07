import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dependency-injection-http';
  /* public newUserSaved: boolean = false;
  @Output() usersNeedToUpdateEvent = new EventEmitter<boolean>(); */

/*   public handleUserSave(): void {
    this.newUserSaved = true;
  }

  public resetSavedState(): void {
    this.newUserSaved = false;
  } */
}
