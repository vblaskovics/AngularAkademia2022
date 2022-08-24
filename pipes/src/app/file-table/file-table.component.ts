import { Component, OnInit } from '@angular/core';
import { Files } from '../models/file-model';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css'],
})
export class FileTableComponent implements OnInit {
  files: Files[] = new Array();
  mbStatus: boolean = false;
  gbStatus: boolean = false;

  constructor() {
    this.mbStatus = false;
    this.gbStatus = false;
    this.files = [
      {
        id: 1,
        name: 'run.home.exe',
        modifyDate: new Date(2021, 2, 21, 14, 22).getTime(),
        size: 4324323,
      },
      {
        id: 2,
        name: 'image.jpg',
        modifyDate: new Date(2021, 3, 2, 10, 2).getTime(),
        size: 34323,
      },
      {
        id: 3,
        name: 'document.pdf',
        modifyDate: new Date(2022, 6, 19, 3, 22).getTime(),
        size: 12434323,
      },
    ];
  }

  ngOnInit(): void {}

  fileToMbClicked() {
    return !this.mbStatus;
  }

  fileToGbClicked() {
    return !this.gbStatus;
  }
}
