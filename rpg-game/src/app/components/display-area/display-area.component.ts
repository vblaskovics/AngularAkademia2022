import { Component, OnInit, Input } from '@angular/core';
import {DisplayService} from "../../services/display.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnInit {

  textToDisplay: Observable<string> = this.displayService.getHistoryText();
  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {

  }

}
