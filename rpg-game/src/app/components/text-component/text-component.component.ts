import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {

  @Input() historyLog?: string

  constructor() {}

  ngOnInit(): void {

  }

}
