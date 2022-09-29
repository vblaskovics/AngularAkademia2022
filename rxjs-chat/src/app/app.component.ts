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
    this.messageService.counter$.subscribe((numberOfMsg) => {
      console.log('number of messages: ', numberOfMsg)
    })


    this.messageService.messages$.subscribe((messages) => {
      console.log('messages: ', messages);
    })

    // this.messageService.updates$.next((messages: Message[]) => {
    //   let msg1: Message = new Message({text: 'Hello world 1'});
    //   messages.push(msg1);
    //   return messages;
    // });
    this.messageService.create$.next(new Message({text: 'Hello world 1'}))
    this.messageService.create$.next(new Message({text: 'Hello world 2'}))
    // this.messageService.create$.next(new Message({text: 'Hello world 3'}))
    // this.messageService.createMessages$.next(
    //   [
    //     new Message({text: 'Hello fuck 1', sentAt: new Date('2022-09-25')}),
    //     new Message({text: 'Hello fuck 2', sentAt: new Date('2022-09-20')})
    // ]);
    //
    // this.messageService.createMessages$.next(
    //   [
    //     new Message({text: 'Hello fuck 3', sentAt: new Date('2022-09-26')}),
    //     new Message({text: 'Hello world 4', sentAt: new Date('2022-09-15')})
    // ])

    // this.messageService.censor$.next(['fuck', 'f#@k'])

    // feladat
    // this.messageService.dateHandler$.next(new Date());



    // this.messageService.remove$.next(new Date('2022-09-21'));
  }
}
