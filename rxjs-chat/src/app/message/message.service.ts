import { Injectable } from '@angular/core';
import { filter, map, Observable, scan, Subject } from 'rxjs';
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

  create$: Subject<Message> = new Subject<Message>()

  constructor() {

    this.messages$ = this.updates$
      .pipe(scan((messages: Message[], operation:IMessageOperator) => {
        return operation(messages);
      }, []));

    this.create$.pipe(map((message: Message)=> {
      return (messages:Message[]) => {
        messages.push(message);
        return messages;
      }
    })).subscribe(this.updates$);

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
