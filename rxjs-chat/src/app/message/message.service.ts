import { Injectable } from '@angular/core';
import { filter, Observable, scan, Subject, map, tap} from 'rxjs';
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

  create$: Subject<Message> = new Subject<Message>()
  createMessages$: Subject<Message[]> = new Subject<Message[]>()
  censor$: Subject<string[]> = new Subject<string[]>()
  date$: Subject<Date> = new Subject<Date>()
  author$: Subject<User> = new Subject<User>()
  numberOfMessages$: Subject<any> = new Subject<any>()

  constructor() {
    this.messages$ = this.updates$
    .pipe(scan((messages: Message[], operation: IMessageOperator) => {
      return operation(messages);
    }, []));

    this.create$.pipe(
      map((message: Message) => {
        return (messages: Message[]) => {
          messages.push(message);
          return messages
        }
      })).subscribe(this.updates$)

    this.createMessages$.pipe(
      map((messages: Message[]) => {
        return (msgs: Message[]) => msgs.concat(messages)
      })
    ).subscribe(this.updates$)

    this.censor$.pipe(
      map((options: string[]) => {
        return (msgs: Message[]) => {
          return msgs.map(msg => {
            msg.text = msg.text.replace(options[0], options[1])
            return msg
          })
        }
      })
    ).subscribe(this.updates$)

    this.updates$.subscribe(() => console.log('update történt'))

    this.date$.pipe(
      map((date: Date) => {
        return (msgs: Message[]) => {
          return msgs.map(msg => {
            msg.sentAt < date ? msg.isRead = true : null
            return msg
          })
        }
      })
    ).subscribe(this.updates$);

    this.messages$.pipe(
      map(msgs => msgs.length)
    ).subscribe(this.numberOfMessages$)
   
   
    this.author$.pipe(
      map((author: User) => {
        return (msgs: Message[]) => {
          return msgs.map(msg => {
            msg.text.includes('#&') ? msg.author = author : null;
            return msg
          })
        }
      })
    ).subscribe(this.updates$)

    this.numberOfMessages$.subscribe((msg) => {
      console.log(msg)
    })
   }

  addMessage(message: Message): void {
    this.newMessage$.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessage$.pipe(
      filter((message: Message) => message.thread.id === thread.id && message.author.id !== user.id),
    )
  }
}
