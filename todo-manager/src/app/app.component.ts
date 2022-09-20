import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSignInForm: boolean = false;

  receiveShowForm(showSignInForm: boolean) {
    this.showSignInForm = showSignInForm;
  }

}
