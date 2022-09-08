import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  inputValue: string;

  constructor(public mainService: MainServiceService) {
    this.inputValue = '';
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.mainService.enteredWord = this.inputValue;
    this.mainService.compareWords();
    this.inputValue = '';
  }

}
