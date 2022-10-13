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

  constructor(private messageService: MessageService) {

    let msg1: Message = <Message>{text: "hello World 1"}; //<Message> konstruktort hiv, ugyanaz, mint a new Message
    let msg2: Message = <Message>{text: "hello World 2"}; 
    let msg3: Message = <Message>{text: "hello World 3"}; 

    this.messageService.messages$.subscribe((messages: Message[])=>{
      console.log("messages: ", messages)
    })

    //messagek kiiratása:

    // this.messageService.updates$.next((messages: Message[])=>{
    //   messages.push(msg1);
    //   return messages;
    // });

    // this.messageService.updates$.next((messages: Message[])=>{
    //   messages.push(msg2);
    //   return messages;
    // });

    // this.messageService.updates$.next((messages: Message[])=>{
    //   messages.push(msg3);
    //   return messages;
    // });

    //update f amikor benne van a változó:

    this.messageService.updates$.next((messages: Message[])=>{
      let msg4: Message = <Message>{text: "hello World 4"}; 
      messages.push(msg4);
      return messages;
    });


    // a fentiek helyett, ez reaktivosabb, igy nem lesz végtelen loop: 

    this.messageService.counter$.subscribe((m)=> console.log(m));
    this.messageService.create$.next(new Message({text: "Hello fuck 01", sentAt: new Date(2022,8,28), isRead: false}));
 
    this.messageService.create$.next(new Message({text: "Hello fuck 01", sentAt: new Date(2022,8,27), isRead: false}));
 
    this.messageService.censor$.next(['fuck', 'f@&k']);

    this.messageService.updates$.subscribe(()=>{console.log("Változás történt")} );


    this.messageService.handleDates$.next(new Date(2022,8,29));


   }
}
