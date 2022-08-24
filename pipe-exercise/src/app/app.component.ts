import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipe-exercise';
  currentDate = Date.now();


  itemArray = [{ fileName: 'tököm', date: Date, size: 'mb', item: '.exe' }];
}
