import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() control!: FormControl;
  @Input() type = 'text';
  @Input() id: string = this.label + '_input';

  constructor() {}

  ngOnInit(): void {}
}
