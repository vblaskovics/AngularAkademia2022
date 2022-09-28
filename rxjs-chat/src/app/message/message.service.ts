import {Injectable} from '@angular/core';
import {filter, map, Observable, scan, Subject} from "rxjs";
import {Message} from "./message.model";
import {Thread} from "../thread/thread.model";
import {User} from "../user/user.model";

export interface IMessageOperator extends Function {
  (messages: Message[]): Message[]
}


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  newMessage$: Subject<Message> = new Subject<Message>();

  createMessages$: Subject<Message[]> = new Subject<Message[]>();

  messages$: Observable<Message[]>;

  updates$: Subject<IMessageOperator> = new Subject<IMessageOperator>();

  create$: Subject<Message> = new Subject<Message>();

  censor$: Subject<string[]> = new Subject<string[]>();

  constructor() {
    this.messages$ = this.updates$
      .pipe(scan((messages: Message[], operation: IMessageOperator) => {
          return operation(messages);
        }, []));

    // create streamre fel van iratkozva az updates stream, ami be van csomagolva a messages streambe
    this.create$.pipe(map((message: Message) => {
      return (messages: Message[]) => {
        messages.push(message);
        return messages;
      }
    })).subscribe(this.updates$);

    this.createMessages$.pipe(map((messages) => {
      return (messageList: Message[]) => {
        return [...messageList, ...messages];
      }
    })).subscribe(this.updates$)

    this.censor$.pipe(map((censorList) => {
      return (messages: Message[]) => {
        messages.map((message) => {
          message.text = message.text.replace(censorList[0], censorList[1])
        })
        return messages
      }
    })).subscribe(this.updates$);

  }

  addMessage(message: Message): void {
    this.newMessage$.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessage$.pipe(
      filter((message) => message.thread.id === thread.id && message.author.id !== user.id)
    )
  }
}
