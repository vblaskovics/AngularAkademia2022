import { Injectable } from '@angular/core';
import { filter, Observable, scan, Subject, map, tap } from 'rxjs';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  newMessages$: Subject<Message> = new Subject<Message>();

  messages$: Observable<Message[]>;

  update$: Subject<IMessagesOperation> = new Subject<IMessagesOperation>();

  createMessages$: Subject<Message[]> = new Subject<Message[]>();

  create$: Subject<Message> = new Subject<Message>();

  censor$: Subject<string[]> = new Subject<string[]>();

  readOldMessages$: Subject<Message> = new Subject<Message>();

  constructor() {
    this.messages$ = this.update$.pipe(
      scan((messages: Message[], operation: IMessagesOperation) => {
        return operation(messages);
      }, [])
    );

    let i = 0;
    this.update$.subscribe(() => {
      return console.log('updated ' + i++);
    });

    this.readOldMessages$.pipe(
      tap(() => console.log('read old messages$ event'))
    ),
      map((date: Date): IMessagesOperation => {
        return (messages: Message[]) => {
          messages.map((m) => {
            if (m.sentAt > date) {
              m.isRead = true;
            }
            return m;
          });
          return messages;
        };
      });

    this.create$
      .pipe(
        map((message: Message) => {
          return (messages: Message[]) => {
            messages.push(message);
            return messages;
          };
        })
      )
      .subscribe(this.update$);

    this.createMessages$
      .pipe(
        map((newMessages: Message[]) => {
          return (messages: Message[]) => {
            return messages.concat(newMessages);
          };
        })
      )
      .subscribe(this.update$);

    this.censor$
      .pipe(
        map((options: string[]) => {
          return (messages: Message[]) => {
            messages.map((message: Message) => {
              message.text = message.text.replace(options[0], options[1]);
              return message;
            });
            return messages;
          };
        })
      )
      .subscribe(this.update$);
  }

  public addMessage(message: Message): void {
    this.newMessages$.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessages$.pipe(
      filter(
        (message: Message) =>
          message.thread.id === thread.id && message.author.id !== user.id
      )
    );
  }
}
