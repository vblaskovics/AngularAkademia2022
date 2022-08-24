import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-pages',
  templateUrl: './pipes-pages.component.html',
  styleUrls: ['./pipes-pages.component.css']
})
export class PipesPagesComponent implements OnInit {

  user = 'Peter';
  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
