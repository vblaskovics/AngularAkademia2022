import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-box',
  templateUrl: './display-box.component.html',
  styleUrls: ['./display-box.component.scss'],
})
export class DisplayBoxComponent implements OnInit {
  @Input() textToDisplay?: string;

  constructor() {}

  ngOnInit(): void {}
}
