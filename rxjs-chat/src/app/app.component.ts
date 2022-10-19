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
    /*     let msg1: Message = new Message({ text: 'Hello world 1' });
    let msg2: Message = new Message({ text: 'Hello world 2' });
    let msg3: Message = new Message({ text: 'Hello world 3' }); */

    this.messageService.messages$.subscribe((messages: Message[]) => {
      console.log(messages);
    });
    /*
    this.messageService.updates$.next((messages: Message[]) => {
      messages.push(msg1);
      messages.push(msg2);
      messages.push(msg3);
      return messages;
    }); */
    this.messageService.messageCounter$.subscribe((number) => console.log('Number', number)); 

    this.messageService.createMessages$.next([
      new Message({ text: 'Hello fuck 1', isRead: false, sentAt: new Date(2023, 10, 1) }),
      new Message({ text: 'Fuck word!', sentAt: new Date() }),
      new Message({ text: 'Hello fuck 2' }),
      new Message({ text: 'Hello fuck 123' }),
      new Message({ text: 'Hello fuck 12300000', sentAt: new Date() }),
    ]);

    this.messageService.censor$.next(['fuck', 'f#&k']);
    this.messageService.dateHandler$.next(new Date(2022, 12, 24));

  }
}
