import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnInit {

  @Input() textToDisplay: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
