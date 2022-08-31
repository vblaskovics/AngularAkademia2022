import { Component, OnInit } from '@angular/core';
import { File } from '../model/file';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css'],
})
export class FileTableComponent implements OnInit {
  files: File[];
  unit: 'GB' | 'MB' = 'GB';

  constructor() {
    this.files = [
      {
        name: 'image.jpg',
        modifyDate: 675633735743,
        size: 87003334234,
      },
      {
        name: 'run.exe',
        modifyDate: 8768759333,
        size: 23675324324,
      },
      {
        name: 'homework.docs',
        modifyDate: 3324326452233,
        size: 2352423434222,
      },
    ];
  }

  onGBclicked(): void {
    this.unit = 'GB';
  }

  onMBclicked(): void {
    this.unit = 'MB';
  }

  ngOnInit(): void {}
}
