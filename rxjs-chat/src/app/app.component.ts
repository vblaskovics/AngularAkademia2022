import { MessageService } from './message/message.service';
import { Component } from '@angular/core';
import { Message } from './message/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs Chat App';

  constructor(private messageService: MessageService) {

    // let msg1: Message = new Message({text: 'Hello World 1'});
    // let msg3: Message = new Message({text: 'Hello World 3'});
    // let msg2: Message = new Message({text: 'Hello World 2'});

    this.messageService.messages$.subscribe( (messages: Message[]) => {
      console.log('messages', messages);
    })

    // this.messageService.update$.next((messages: Message[]) => {
    //   messages.push(msg1);
    //   return messages;
    // });
    // this.messageService.update$.next((messages: Message[]) => {
    //   messages.push(msg2);
    //   return messages;
    // });
    // this.messageService.update$.next((messages: Message[]) => {
    //   messages.push(msg3);
    //   return messages;
    // });

    this.messageService.numberOfMessages$.subscribe((length) => {
      console.log('length', length);
    });

    this.messageService.create$.next(new Message({text: 'Hello World 1', sentAt: new Date('2021-01-21')}));
    this.messageService.create$.next(new Message({text: 'Hello World 2'}));
    this.messageService.create$.next(new Message({text: 'Hello World 3'}));

    // this.messageService.createMessages$.next([
    //   new Message({text: 'Hello World 1'}),
    //   new Message({text: 'Hello World 2'}),
    //   new Message({text: 'Hello World 3'})
    // ])
    this.messageService.createMessages$.next([
      new Message({text: 'Hello fuck 1'}),
      new Message({text: 'Hello fuck 2'}),
      new Message({text: 'Hello fuck 3'})
    ])

    this.messageService.censor$.next(['fuck', 'f#&k']);

    //feladatok:
    this.messageService.date$.next(new Date('2022-01-01'));

  }
}
