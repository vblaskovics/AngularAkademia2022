import { Component, OnInit } from '@angular/core';
import { AlignmentService } from './alignment.service';

@Component({
  selector: 'app-alignment-bar',
  templateUrl: './alignment-bar.component.html',
  styleUrls: ['./alignment-bar.component.scss']
})
export class AlignmentBarComponent implements OnInit {

  constructor(private alignmentService: AlignmentService) { }

  ngOnInit(): void {
  }

  setHorizontalAlignment(value: string): void {
    this.alignmentService.horizontalAlignment = value
    console.log(this.alignmentService.horizontalAlignment)
  }

  setVerticalAlignment(value: string): void {
    this.alignmentService.verticalAlignment = value
    console.log(this.alignmentService.verticalAlignment)
  }


}
