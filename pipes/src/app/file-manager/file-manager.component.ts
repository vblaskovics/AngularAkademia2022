import { Component, OnInit } from '@angular/core';
import { File } from '../file';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css'],
})
export class FileManagerComponent implements OnInit {
  files: File[] = [];
  fileFormat: string = 'Mb';
  constructor() {
    let dateTime = new Date().getTime();

    this.files = [
      {
        name: 'run.setup.asd.html.exe',
        modifyDate: dateTime,
        size: 21321313,
      },
      {
        name: 'setup.exe',
        modifyDate: dateTime - 43213213500,
        size: 3213211152,
      },
      {
        name: 'uninstall.exe',
        modifyDate: dateTime - 2133213213,
        size: 321321331,
      },
    ];
  }

  ngOnInit(): void {}
}
