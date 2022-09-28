import { Component } from '@angular/core';
import {MessageService} from "./message/message.service";
import {Message} from "./message/message.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs Chat App';

  constructor(private messageService: MessageService) {
    this.messageService.messages$.subscribe((messages) => {
      console.log('messages: ', messages);
    })

    // this.messageService.updates$.next((messages: Message[]) => {
    //   let msg1: Message = new Message({text: 'Hello world 1'});
    //   messages.push(msg1);
    //   return messages;
    // });
    // this.messageService.create$.next(new Message({text: 'Hello world 1'}))
    // this.messageService.create$.next(new Message({text: 'Hello world 2'}))
    // this.messageService.create$.next(new Message({text: 'Hello world 3'}))
    this.messageService.createMessages$.next([new Message({text: 'Hello fuck 1'}), new Message({text: 'Hello fuck 2'})])
    this.messageService.createMessages$.next([new Message({text: 'Hello fuck 3'}), new Message({text: 'Hello world 4'})])

    this.messageService.censor$.next(['fuck', 'f#@k'])
  }
}
