import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../message/message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements OnInit, OnDestroy {
  messages?: Observable<any>;
  currentThread?: Thread;
  currentUser?: User;

  draftMessage?: Message;
  unSubNotifier = new Subject();

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
  }

  onEnter(event: any): void {
  }

}
