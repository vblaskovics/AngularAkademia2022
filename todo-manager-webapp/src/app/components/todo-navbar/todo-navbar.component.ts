import { AuthService } from 'src/app/services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css'],
})
export class TodoNavbarComponent implements OnInit {
  @Input() progressCounter: number = 0;
  @Output() signInPressed = new EventEmitter<boolean>();

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onSignIn() {
    this.signInPressed.emit(true);
  }
}
