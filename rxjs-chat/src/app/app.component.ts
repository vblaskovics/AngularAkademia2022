import { Component } from '@angular/core';
import { Message } from './message/message.model';
import { MessageService } from './message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rxjs Chat App';

  constructor(private messageService: MessageService) {
    let msg1: Message = new Message({ text: 'Hello fuck 1' });
    let msg2: Message = new Message({ text: 'Hello fuck 2' });
    let msg3: Message = new Message({ text: 'Hello fuck 3' });

    let msg4: Message = new Message({
      text: 'Hello fuck 4',
      sentAt: new Date(2023, 5, 14),
    });
    let msg5: Message = new Message({
      text: 'Hello fuck 5',
      sentAt: new Date(2020, 1, 25),
    });

    this.messageService.messages$.subscribe((messages: Message[]) => {
      console.log('messages:', messages);
    });

    // this.messageService.updates$.next((messages: Message[]) => {
    //   messages.push(msg1);
    //   return messages;
    // });
    // this.messageService.updates$.next((messages: Message[]) => {
    //   messages.push(msg2);
    //   return messages;
    // });
    // this.messageService.updates$.next((messages: Message[]) => {
    //   messages.push(msg3);
    //   return messages;
    // });

    this.messageService.create$.next(msg1);
    this.messageService.create$.next(msg2);
    this.messageService.create$.next(msg3);

    this.messageService.create$.next(msg4);
    this.messageService.create$.next(msg5);
    this.messageService.dates$.next(new Date());

    this.messageService.createMessages$.next([msg1, msg2, msg3]);

    this.messageService.censor$.next(['fuck', 'f#$k']);
  }
}
