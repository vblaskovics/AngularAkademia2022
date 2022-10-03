import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnInit {

  history?: string[] = this.displayService.history;

  constructor(
    private displayService: DisplayService
    ) {}

  ngOnInit(): void {
  }

  displayMessage1() {
    return this.displayService.getMessage1();
  }

  displayMessage2() {
    return this.displayService.getMessage2();
  }

}
