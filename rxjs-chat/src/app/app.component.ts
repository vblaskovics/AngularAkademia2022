import { Component } from '@angular/core';
import { Message } from './message/message.model';
import { MessageService } from './message/message.service';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs Chat App';

  constructor(private messageService: MessageService) { 
    // let msg1:Message = new Message({text:'Hello fuck 1'});
    // let msg2:Message = new Message({text:'Hello fuck 2'});
    // let msg3:Message = new Message({text:'Hello fuck 3'});

    this.messageService.messages$.subscribe((messages: Message[]) => {
      console.log('messages:', messages);  
    })

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

    // this.messageService.create$.next(msg1)
    // this.messageService.create$.next(msg2)
    // this.messageService.create$.next(msg3)
    let msg1:Message = new Message({text:'Hello fuck 1', sentAt: (new Date(2022, 12, 23))});
    let msg2:Message = new Message({text:'Hello fuck 2', sentAt: (new Date(2024, 12, 23))});
    let msg3:Message = new Message({text:'Hello fuck 3', sentAt: (new Date(2021, 12, 23))});
    let msg4:Message = new Message({text:'Hello bello 4', sentAt: (new Date(2021, 10, 10))});

    this.messageService.createMessages$.next([msg1, msg2, msg3, msg4]);
    this.messageService.createMessages$.next([msg1, msg2, msg3, msg4]);

    this.messageService.censor$.next(['fuck', 'f#&k'])


    this.messageService.date$.next(new Date(2023, 12, 30))

    this.messageService.author$.next(new User('Gergő'))

  }

}
