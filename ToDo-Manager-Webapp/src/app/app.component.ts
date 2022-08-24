import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo-Manager-Webapp';
  inProgressCounter: number;
  isSignInButtonClicked: boolean = false;

  setInprogressCounter(num: number): void {
    this.inProgressCounter = num;
  }

  onSignIsClicked(isClicked: boolean): void {
    this.isSignInButtonClicked = isClicked;
  }
}
