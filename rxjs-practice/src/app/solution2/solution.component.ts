import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution.component.html',
})
export class SolutionComponent implements OnInit {
  constructor() {}
  showFiveCounter = true;
  ngOnInit(): void {}
  onShowDontShow() {
    this.showFiveCounter = !this.showFiveCounter;
  }
}
