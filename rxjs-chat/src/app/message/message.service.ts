import { Injectable } from '@angular/core';
import { filter, map, Observable, scan, Subject, tap } from 'rxjs';
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

  updates$: Subject<IMessageOperator> = new Subject<IMessageOperator>();

  create$: Subject<Message> = new Subject<Message>();

  createMessages$: Subject<Message[]> = new Subject<Message[]>();

  censor$: Subject<string[]> = new Subject<string[]>();

  // 2. feladat
  readOldMessages$ = new Subject<Date>();

  // 3. feladat
  messageCounter$ = new Observable<number>();

  constructor() {

    this.messages$ = this.updates$
      .pipe(scan((messages: Message[], operation: IMessageOperator) => {
        return operation(messages);
      }, []));

    this.create$.pipe(map((message: Message) => {
      return (messages: Message[]) => {
        return messages.concat(message);
      }
    })).subscribe(this.updates$);

    this.createMessages$.pipe(map((newMessages: Message[]) => {
      return (messages: Message[]) => messages.concat(newMessages)
    })).subscribe(this.updates$);

    this.censor$.pipe(map((options: string[]) => {
      return (messages: Message[]) => {
        messages.map((m) => {
          m.text = m.text.replace(options[0], options[1]);
          return m;
        })
        return messages;
      }
    })).subscribe(this.updates$);

    // 1. feladat 
    this.updates$.subscribe(() => {
      console.log("update történt");
    });

    // 2. feladat
    this.readOldMessages$.pipe(
      tap(() => console.log('readOldMessages$ event')),
      map((d: Date): IMessageOperator => {
        return (msgs: Message[]) => msgs.map((m) => {
          if (m.sentAt < d) {
            m.isRead = true;
          }
          return m
        })
      })).subscribe(this.updates$);

    // 3. feladat
    this.messageCounter$ = this.messages$.pipe(map((msgs: Message[]) => msgs.length));
    this.messageCounter$.subscribe((count) => console.log("Messages count", count));


  }

  addMessage(message: Message) {
    this.newMessage$.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessage$.pipe(
      filter((message: Message) => message.thread.id === thread.id
        && message.author.id !== user.id)
    );
  }


}
