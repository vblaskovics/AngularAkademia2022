import { Injectable } from '@angular/core';
import {
  combineLatest,
  concat,
  filter,
  forkJoin,
  from,
  map,
  Observable,
  scan,
  Subject,
  switchMap,
} from 'rxjs';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

export interface IMessageOperator extends Function {
  (message: Message[]): Message[];
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  newMessage$: Subject<Message> = new Subject<Message>();
  messages$: Observable<Message[]>;
  updates$: Subject<IMessageOperator> = new Subject<IMessageOperator>();
  create$: Subject<Message> = new Subject<Message>();
  createMessage$: Subject<Message[]> = new Subject<Message[]>();
  censor$: Subject<string[]> = new Subject<string[]>();
  constructor() {
    this.createMessage$
      .pipe(
        map((msg: Message[]) => {
          return (messages: Message[]) => {
            messages.push(...msg);
            return messages;
          };
        })
      )
      .subscribe(this.updates$);

    this.censor$
      .pipe(
        map((censor: string[]) => {
          return (msg: Message[]) => {
            return msg.map((message: Message) => {
              message.text = message.text.replace(censor[0], censor[1]);
              return message;
            });
          };
        })
      )
      .subscribe(this.updates$);

    this.messages$ = this.updates$.pipe(
      scan((message: Message[], operation: IMessageOperator) => {
        return operation(message);
      }, [])
    );

    this.create$
      .pipe(
        map((message: Message) => {
          return (messages: Message[]) => {
            messages.push(message);
            return messages;
          };
        })
      )
      .subscribe(this.updates$);
  }
  addMessage(message: Message) {
    this.newMessage$.next(message);
  }
  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessage$.pipe(
      filter((message: Message) => {
        return message.thread.id == thread.id && message.author.id !== user.id;
      })
    );
  }
}
