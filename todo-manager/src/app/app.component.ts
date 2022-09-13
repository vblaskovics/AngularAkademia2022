import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: any;
  subtodoTitle: any;
  showSignInForm: boolean = false;
 // title = 'Todo Manager'


  passToDetails(event: any) {
    this.details = event;
  }

  receiveShowForm(showSignInForm: boolean) {
    this.showSignInForm = showSignInForm;
  }

}
