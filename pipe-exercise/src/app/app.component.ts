import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipe-exercise';
  currentDate = Date.now();


  itemArray = [
    { fileName: 'letter.docx', modifyDate: 1641254400000, size: 233212458 },
    { fileName: 'letter.v02.docx', modifyDate: new Date('2022-04-23').getTime(), size: 2333016458 },
    { fileName: 'letter.v04.docx', modifyDate: new Date('2022-07-30').getTime(), size: 5125515682 },
    { fileName: 'letter.v07.docx', modifyDate: new Date('2022-02-22').getTime(), size: 6847625123 },

  ];
}
