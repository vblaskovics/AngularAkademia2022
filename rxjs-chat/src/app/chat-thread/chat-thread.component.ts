import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Thread } from '../thread/thread.model';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css'],
})
export class ChatThreadComponent implements OnInit, OnDestroy {
  @Input() thread!: Thread;
  selected: boolean = false;
  currentThreadSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
