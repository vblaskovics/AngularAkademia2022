import { Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Manager App';
  inProgressCounter!: number;

  setInprogressCounter(num: number): void {
    this.inProgressCounter = num;
  }

  


}
