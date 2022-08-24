import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  files = [
    {
      name: 'run.exe',
      modifyDate: new Date('2022-01-03').getTime(),
      size: 471859206,
    },
    {
      name: 'movie.mp4',
      modifyDate: new Date('2022-04-12').getTime(),
      size: 3735859501,
    },
    {
      name: 'letter.docx',
      modifyDate: new Date('2022-05-01').getTime(),
      size: 3152285,
    }
  ];

  isGb = false;

  constructor() {}

  ngOnInit(): void {}

}
