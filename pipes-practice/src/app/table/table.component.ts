import { Component, OnInit } from '@angular/core';
import { dummyData } from './mock/dummy-data';
import { File } from './model/file';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
   table: File[] = dummyData;
   isMb: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  displayInMb(isMb: boolean): void {
    this.isMb = isMb;
  }

}
