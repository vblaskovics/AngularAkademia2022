import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-table',
  templateUrl: './pipe-table.component.html',
  styleUrls: ['./pipe-table.component.css']
})
export class PipeTableComponent implements OnInit {

  files: any
  isMb: boolean

  constructor() {
    this.files = [
      {name: 'paint.helloka.exe', modify: 1567349129046, size: 267056},
      {name: 'wallpaper.jpeg', modify: 1457349129046, size: 2670},
      {name: 'vscode.exe', modify: 1631349367046, size: 4562156},
    ],
    this.isMb = true;
   }

  ngOnInit(): void {
  }

  convertToMb() : void{
    this.isMb = true;
  }
  convertToGb() : void{
    this.isMb = false;
  }

}
