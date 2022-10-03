import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html'
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCounter: Observable<number> = new Observable();

  constructor() { }

  ngOnInit(): void { }

}
