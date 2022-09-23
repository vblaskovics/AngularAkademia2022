import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnInit {

  @Input() displayText: string = "";

  constructor() { }

  ngOnInit(): void {
  }



}
