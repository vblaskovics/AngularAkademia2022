import { Component, OnInit, Output } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-typing-field',
  templateUrl: './typing-field.component.html',
  styleUrls: ['./typing-field.component.css']
})
export class TypingFieldComponent implements OnInit {

  typedValue:string = '';

  constructor(private stateService:StateService) { }

  ngOnInit(): void {
  }

  action() {
    console.log(this.typedValue);
    this.stateService.typingCheck(this.typedValue);
    this.typedValue = '';
  }
}
