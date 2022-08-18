import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-manager-webapp';
  signInPressed: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  checkSignIn(status: boolean) {
    this.signInPressed = status;
  }
}
