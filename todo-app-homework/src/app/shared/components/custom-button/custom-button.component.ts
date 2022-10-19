import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: string = 'button';
  @Input() width: string = '100%';
  @Input() id: string = 'button_' + Math.random();
  @Output() clicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.clicked.emit();
  }
}
