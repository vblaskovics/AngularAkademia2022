import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message/message.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message?: Message;
  currentUser?: User;
  incoming?: boolean;

  constructor() { }

  ngOnInit(): void { }

}
