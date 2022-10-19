import { Injectable } from '@angular/core';
import { filter, map, Observable, scan, share, Subject, tap } from 'rxjs';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

interface IMessageOperator extends Function {
  (messages: Message[]): Message[]
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  newMessage$: Subject<Message> = new Subject<Message>();

  messages$: Observable<Message[]>;

  updates$: Subject<any> = new Subject<any>();

  create$: Subject<Message> = new Subject<Message>();

  date$: Subject<Date> = new Subject<Date>();

  messageCounter$ : Observable<number> = new Observable<number>();

  ghostMessage$ : Subject<Message> = new Subject<Message>();


  constructor() {



    this.messages$ = this.updates$
      .pipe(
        tap(() => console.log('update történt')),
        scan((messages: Message[], operation:IMessageOperator) => {
        return operation(messages);
      }, []), share());

    this.create$.pipe(map((message: Message)=> {
      return (messages:Message[]) => {
        return messages.concat(message);
      }
    })).subscribe(this.updates$);



    /* MÁSODIK FELADAT */

    this.date$.pipe(map((date: Date) => {
      return (messages: Message[]) => {
        messages.forEach((msg: Message) => {
          if (msg.sentAt < date){
            msg.isRead = true;
          } else {
            msg.isRead = false;
          }
        });
          return messages;
        }
      }
    )).subscribe(this.updates$);

    /* HARMADIK FELADAT */

    this.messages$.pipe(map((messages: Message[]) => {
      return messages.length;
    })).subscribe((count: number) => {
      console.log('messages:', count)
    })

    /* NEGYEDIK FELADAT - EGYEDI */

    this.messages$.pipe(map((messages: Message[]) => {
      return messages.filter((msg: Message) => msg.isRead === false);
    })).subscribe((messages: Message[]) => {
      console.log('unread messages:', messages);
    });

    /* ÖTÖDIK FELADAT - EGYEDI */

    this.ghostMessage$.pipe(map((message: Message) => {
      return (messages: Message[]) => {
        messages = messages.filter((msg: Message) => msg.author !== message.author);
        return messages;
      }
    })).subscribe(this.updates$);



    /* this.messages$.pipe(map((messages: Message[]) => {
      return messages.filter((message: Message) => {
        message.sentAt > new Date();
        return messages;
      });
    })).subscribe(this.updates$); */


  }


  addMessage(msg: Message) {
    this.newMessage$.next(msg);
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessage$.pipe(
      filter((msg: Message) => msg.thread.id === thread.id
        && msg.author.id !== user.id)
    );
  }


}
