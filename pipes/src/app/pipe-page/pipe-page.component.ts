import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.css']
})
export class PipePageComponent implements OnInit {
    user = 'Peter';
    currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }


}
