import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.css']
})
export class PipePageComponent implements OnInit {
<<<<<<< HEAD
  user = 'Peter';
  currentDate = new Date();
  
=======

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

>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
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


>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
}
