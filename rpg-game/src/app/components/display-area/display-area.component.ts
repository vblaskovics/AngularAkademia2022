import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.scss']
})
export class DisplayAreaComponent implements OnInit {

  @Input() historyText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
