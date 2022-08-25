import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-table',
  templateUrl: './pipe-table.component.html',
  styleUrls: ['./pipe-table.component.css']
})
export class PipeTableComponent implements OnInit {

  unit = 'Gb';

  files = [
    { name: 'run.exe',
    modifyDate: new Date('2022, March, 5').getTime(),
    size: 20001234567,
    },
    { name: 'smile.component.ts',
    modifyDate: new Date('2015, January, 28').getTime(),
    size: 40004567891,
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
