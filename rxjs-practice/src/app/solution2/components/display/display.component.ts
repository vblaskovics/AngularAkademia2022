import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  word:{value:string};
  constructor(private stateService:StateService) { 
    this.word = this.stateService.getWord();
  }

  ngOnInit(): void {
  }

}
