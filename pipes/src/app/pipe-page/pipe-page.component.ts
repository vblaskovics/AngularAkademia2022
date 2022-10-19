import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.css']
})
export class PipePageComponent implements OnInit {

  user = 'Peter';

  files = [
    {
      name: 'asdasd.exe',
      modifyDate: 1232411324322332,
      size: 1233432
    },
    {
      name: 'as3123131sd.lol',
      modifyDate: 1232411321222332,
      size: 13432
    },
    {
      name: 'asdascsfdd.psd',
      modifyDate: 3032411777322332,
      size: 1233434252
    }
  ]

  onValtaska() {

  }

  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
