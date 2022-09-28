import { Component } from '@angular/core';
import { Message } from './message/message.model';
import { MessageService } from './message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs Chat App';

  constructor(private messageService:MessageService) {

    let msg3:Message = new Message({text:'Hello world 3'});

    this.messageService.messages$.subscribe((messages: Message[]) => {
      console.log('messages:', messages);
    })

    /*this.messageService.updates$.next((messages: Message[]) => {
      let msg1:Message = new Message({text:'Hello world 1'});
      messages.push(msg1);
      return messages;
    });
    this.messageService.updates$.next((messages: Message[]) => {
      let msg2:Message = new Message({text:'Hello world 2'});
      messages.push(msg2);
      return messages;
    });
    this.messageService.updates$.next((messages: Message[]) => {
      let msg3:Message = new Message({text:'Hello world 1'});
      messages.push(msg3);
      return messages;
    });*/

    this.messageService.create$.next(new Message({text:'Hello world 1'}));
    this.messageService.create$.next(new Message({text:'Hello world 2'}));
    this.messageService.create$.next(new Message({text:'Hello world 3'}));

  }
}
