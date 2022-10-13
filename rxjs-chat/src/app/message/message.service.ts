import { User } from './../user/user.model';
import { filter, Subject, Observable, scan, map, tap, share } from 'rxjs';
import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';

interface IMessageOperator extends Function{
  (messages: Message[]): Message[];
}


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  newMessage$: Subject<Message> = new Subject<Message>() //egy message
  
  messages$: Observable<Message[]>;
  
  updates$: Subject<any> = new Subject<any>(); //lehet observer IS !
  
  create$: Subject<Message> = new Subject<Message>;
  
  createMessages$: Subject<Message[]> = new Subject<Message[]>;

  censor$:Subject<string[]> = new Subject<string[]>;
  
  handleDates$: Subject<Date> = new Subject<Date>();
  
  counter$: Observable<Number>;

  //saját feladat:
  addSmile$: Subject<string> = new Subject<string>();
  
  constructor() { 
    this.messages$ = this.updates$.pipe(
      tap(()=> console.log("call scan")),
      scan((messages: Message[], operation: IMessageOperator)=>{
        return operation(messages);
      }, []), share()); //share-unicastból multicast, mert a messages$ egy observable
       // [] a kiinduló érték
      //  erre kell egy scan pipe

    this.counter$ = this.messages$.pipe(map((messages: Message[]) => {
        return messages.length})); 

        
    this.create$.pipe(map((message: Message)=>{
        return (messages: Message[]) => {
          // messages.push(message) push helyett concat - ujat hozunk létre;
          return messages.concat(message)}
     })).subscribe(this.updates$);

     
     //messagek tömbjét adja vissza, ne csak egy messaget:
     this.createMessages$.pipe(map((message: Message[])=>{
      return (messages: Message[]) => {
        messages.forEach(m=>messages.push(m))
        return message}
   })).subscribe(this.updates$);


   //concattel összefűzés:
  //  this.createMessages$.pipe(map((newMessages: Message[])=>{
  //   return (messages: Message[]) => {
  //     messages.concat(newMessages)
  // })).subscribe(this.updates$);

  this.censor$.pipe(map((options: string[])=>{
    return (messages: Message[]) => {
      messages.forEach(m => {
        m.text = m.text.replace(options[0],options[1]);
      });
      return messages;
    }
 })).subscribe(this.updates$);



 //másképp:

 this.censor$.pipe(map((options: string[])=>{
  return (messages: Message[]) => {

    messages.map((m) => {
      m.text = m.text.replace(options[0],options[1]);
      return m;
    })
    return messages;
  }

})).subscribe(this.updates$);


  // this.updates$.pipe(map((message: Message)=>{
  //   console.log(message)
  //   }));
  

    this.handleDates$.pipe(map((date: Date)=>{
      return (messages: Message[]) => {
          return messages.map((msg) =>{msg.sentAt < date ? msg.isRead = true : msg.isRead = msg.isRead
            return msg; })
          }
     })).subscribe(this.updates$);
    

 }




  addMessage(message: Message){
    this.newMessage$.next(message);
  }


  messagesForThreadUser(thread: Thread, user: User){
    return this.newMessage$.pipe(
      filter((message:Message) => message.thread.id === thread.id 
        && message.author.id !== user.id)
    );
  }


}
