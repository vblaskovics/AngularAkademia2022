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

  dates$: Subject<Date> = new Subject<Date>();
  messageNumber$: Observable<number> = new Observable<number>();

  constructor() {
    this.messages$ = this.updates$.pipe(
      scan((messages: Message[], operation: IMessageOperator) => {
        return operation(messages);
      }, [])
      // így nem tölti be duplán az adatokat, lásd rxjs-basics learn_05_multicast része. Ide azért nem kell setTimeout, mert Subject-ünk is van, amúgy kéne
      // share()
    );

    this.messageNumber$ = this.messages$.pipe(
      map((messages) => messages.length)
    );

    this.messageNumber$.subscribe((msg) => console.log(msg));

    this.updates$.subscribe(() => console.log('update happened'));

    // felpusholt megoldás (tap-et kéne importálni)
    // this.dates$.pipe(
    //   tap(() => console.log('readOldMessages$ event')),
    //   map((d: Date): IMessageOperator => {
    //     return (msgs: Message[]) => msgs.map((m) => {
    //       if (m.sentAt < d) {
    //         m.isRead = true;
    //       }
    //       return m
    //     })
    //   })).subscribe(this.updates$);

    this.dates$
      .pipe(
        map((date: Date) => {
          return (messages: Message[]) => {
            return messages.map((msg) => {
              if (msg.sentAt < date) {
                msg.isRead = true;
              }
              return msg;
            });
            // return messages;
          };
        })
      )
      .subscribe(this.updates$);

    this.create$
      .pipe(
        map((message: Message) => {
          return (messages: Message[]) => {
            // push helyben módosítja, de nekünk concat kell h ne legyen duplikált (unicastol 2xer) az első 5 msg-ünk! Ha a push-t hagynánk, akkor kell a share() a this.messages$ végére!
            // messages.push(message);
            return messages.concat(message);
          };
        })
      )
      .subscribe(this.updates$);

    this.createMessages$
      .pipe(
        map((newMessages: Message[]) => {
          return (messages: Message[]) => messages.concat(newMessages);
        })
      )
      .subscribe(this.updates$);

    this.censor$
      .pipe(
        map((options: string[]) => {
          return (messages: Message[]) => {
            messages.map((msg) => {
              msg.text = msg.text.replace(options[0], options[1]);
              return msg;
            });
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
      filter(
        (message: Message) =>
          message.thread.id === thread.id && message.author.id !== user.id
      )
    );
  }
}
