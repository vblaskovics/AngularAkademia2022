import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.css']
})
export class PipePageComponent implements OnInit {
  user = 'Pítör Párkör';
  currentDate = new Date();
  showcounter = true;
  constructor() { }

  ngOnInit(): void {
  }

}
