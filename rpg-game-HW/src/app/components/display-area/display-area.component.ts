import { DisplayService } from 'src/app/services/display.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.scss']
})
export class DisplayAreaComponent implements OnInit {

  // @Input() historyText: string = "";
  @Input() EventMessage: string = "";
  history = this.displayService.History

  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {
  }

}
