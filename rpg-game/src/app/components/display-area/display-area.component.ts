import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/service/display.service';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css'],
})
export class DisplayAreaComponent implements OnInit {
  /* historyText: string; */

  constructor( public displayService: DisplayService) {
    /* this.historyText = this.displayService.getHistoryText(); */
  }

  ngOnInit(): void {}
}
