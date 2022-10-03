import { Component } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
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
    this.messageService.messages$.subscribe((messages: Message[]) => {
      console.log('messages:', messages);
    })

    this.messageService.messageCounter$.subscribe((count) => console.log("Messages count", count));
    
    this.messageService.create$.next(new Message({text:'Hello world 1'}));

    this.messageService.create$.next(new Message({text:'Hello world 2', sentAt: new Date("2022-09-01")}));
    this.messageService.create$.next(new Message({text:'Hello world 3'}));

    this.messageService.createMessages$.next([
      new Message({text:'Hello fuck 1'}),
      new Message({text:'Hello fuck 2'}),
      new Message({text:'Hello fuck 3', sentAt: new Date("2022-09-03")})
    ]);
    
    this.messageService.censor$.next(['fuck', 'f#&k']);
    
    this.messageService.readOldMessages$.next(new Date("2022-09-28"));

    this.messageService.create$.next(new Message({text:'Hello world 4'}));

  }
}
