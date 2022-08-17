import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() title!: string;
  @Input() counter!: number;
  @Input() asdTo!: string;
  @Output() emitChange = new EventEmitter<any>();
  @Output() todoPushEmit = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  handleForm(f: any) {
    if (f.title.length) {
      this.todoPushEmit.emit(f.title);
    }
  }
}
