import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  score: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
