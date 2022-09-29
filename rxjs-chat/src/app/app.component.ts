import { Component } from '@angular/core';
import { Message } from './message/message.model';
import { IMessageOperator, MessageService } from './message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rxjs Chat App';

  constructor(private messageService: MessageService) {
    let ms1: Message = <Message>{
      text: 'Hello fuck 1',
    };
    let ms2: Message = <Message>{
      text: 'Hello fuck 2',
    };
    let ms3: Message = <Message>{
      text: 'Hello fuck 3',
    };
    this.messageService.messages$.subscribe((messages: Message[]) => {
      console.log(messages);
    });
    this.messageService.createMessage$.next([ms1, ms2, ms3]);
    this.messageService.censor$.next(['fuck', 'f#&k']);
    /* function add(messages: Message[]) {
      messages.push(ms1);
      return messages;
    }
    this.messageService.updates$.next(add);
    this.messageService.updates$.next((messages: Message[]) => {
      messages.push(ms2);
      return messages;
    }); */
  }
}
