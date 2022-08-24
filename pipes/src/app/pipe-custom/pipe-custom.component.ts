import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-custom',
  templateUrl: './pipe-custom.component.html',
  styleUrls: ['./pipe-custom.component.css'],
})
export class PipeCustomComponent implements OnInit {
  showCounter = true;
  username = 'John';

  constructor() {}

  ngOnInit(): void {}
}
