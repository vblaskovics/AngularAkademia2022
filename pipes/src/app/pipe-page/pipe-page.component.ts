import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.css']
})
export class PipePageComponent implements OnInit {

  makeItGb: boolean = false;
  makeItMb: boolean = true;
  bigArray = [
    {
    name: 'run.exe',
    modifyDate: 1648623627006,
    size: 125000*4
  },
  {
    name: 'dylo.md.exe',
    modifyDate: 1288623627006 ,
    size: 125000*31
  },
  {
    name: 'hajjamameg.config',
    modifyDate: 1282323624016 ,
    size: 125000*53
  },
]

  constructor() { }

  ngOnInit(): void {
  }

  convertToGB(){
    this.makeItGb = true;
    this.makeItMb = false;
  }
  convertToMb(){
    this.makeItMb = true;
    this.makeItGb = false;
  }
  valami(input: number){
    const date = new Date();
    const date2 = new Date(input)
    let time = date.getTime() - date2.getTime();
    let days = time / 1000
    return days.toFixed()
  }


}
