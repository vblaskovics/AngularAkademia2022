import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent {

  @Input() history: string[] = [];
  @Input() killingSpreeMsg: string = '';

  constructor() { }

}
