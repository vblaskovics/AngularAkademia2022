import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: any;
  subtodoTitle: any;

  passToDetails(event: any) {
    this.details = event;
  }

}
