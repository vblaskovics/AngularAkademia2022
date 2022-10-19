import { Injectable } from '@angular/core';
import { filter, map, Observable, scan, share, Subject } from 'rxjs';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

interface IMessageOperator extends Function {
  (messages: Message[]): Message[];
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  newMessage$: Subject<Message> = new Subject<Message>();

  messages$: Observable<Message[]>;

  updates$: Subject<IMessageOperator> = new Subject<IMessageOperator>();

  create$: Subject<Message> = new Subject<Message>();

  createMessages$: Subject<Message[]> = new Subject<Message[]>();

  censor$: Subject<string[]> = new Subject<string[]>();

  dateHandler$: Subject<Date> = new Subject<Date>();

  messageCounter$: Observable<number>;

  constructor() {
    this.messages$ = this.updates$.pipe(
      scan((messages: Message[], operation: IMessageOperator) => {
        return operation(messages);
      }, [])
      // share()
      // Ha observable-re többen iratkoznak fel => share()
    );

    this.messageCounter$ = this.messages$.pipe(
      map((messages: Message[]) => {
        return messages.length;
      })
    );

    this.create$
      .pipe(
        map((message: Message) => {
          return (messages: Message[]) => {
            messages.push(message);
            return messages.concat(message);
          };
        })
      )
      .subscribe(this.updates$);

    this.createMessages$
      .pipe(
        map((newMessages: Message[]) => {
          return (messages: Message[]) => {
            return [...messages, ...newMessages];
          };
        })
      )
      .subscribe(this.updates$);

    this.censor$
      .pipe(
        map((options: string[]) => {
          return (messages: Message[]) => {
            return messages.map((m) => {
              m.text = m.text.replace(options[0], options[1]);
              return m;
            });
            return messages;
          };
        })
      )
      .subscribe(this.updates$);

    this.dateHandler$
      .pipe(
        map((date: Date) => {
          return (messages: Message[]) => {
            return messages.map((m) => {
              m.sentAt < date ? (m.isRead = true) : (m.isRead = m.isRead);
              return m;
            });
          };
        })
      )
      .subscribe(this.updates$);

    this.updates$.subscribe(() => console.log('Update!'));
  }

  addMessage(message: Message) {
    this.newMessage$.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessage$.pipe(
      filter(
        (message: Message) =>
          message.thread.id === thread.id && message.author.id !== user.id
      )
    );
  }
}
