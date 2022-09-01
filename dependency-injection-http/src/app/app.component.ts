import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDto } from './models/user.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-injection-http';

  public newUserSaved: boolean = false;

  handleUserSave(): void {
    this.newUserSaved = true;
  }

  public resetSavedState(): void {
    this.newUserSaved = false;
  }
}
