import {Injectable} from '@angular/core';
import {filter, map, Observable, scan, share, Subject, switchMap, tap} from "rxjs";
import {Message} from "./message.model";
import {Thread} from "../thread/thread.model";
import {User} from "../user/user.model";
import {dateIsAfter} from "../util/dayjs";

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

  // feladatok
  dateHandler$: Subject<Date> = new Subject<Date>();

  counter$: Observable<number> = new Observable<number>();

  remove$: Subject<Date> = new Subject<Date>();

  constructor() {
    this.messages$ = this.updates$
      .pipe(scan((messages: Message[], operation: IMessageOperator) => {
          console.log('update történt');
          return operation(messages);
        }, []),
        share() // -> multicast lesz az observable
        );

    // create streamre fel van iratkozva az updates stream, ami be van csomagolva a messages streambe
    this.create$.pipe(map((message: Message) => {
      return (messages: Message[]) => {
        // push helyben módosít, a concat új listát ad vissza
        // azért jobb még, mert nem a legbelső tömb referenciára hivatkozik
        // -> egy újabb feliratkozó ugyanazt a tömböt kapja, nem a változtatottat
       return messages.concat(message);
        //return messages;
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

    // feladat
    this.dateHandler$.pipe(map((date) => {
      return (messages: Message[]) => {
        messages.map((msg) => {
          msg.isRead = dateIsAfter(date, msg.sentAt);
        })
        return messages
      }
    })).subscribe(this.updates$);

    this.counter$ = this.messages$.pipe(
      map((messages) => {
        return messages.length
      })
    )

    this.remove$.pipe(map((date) => {
      return (messages: Message[]) => {
        messages.map((msg, index) => {
          if(dateIsAfter(date, msg.sentAt)) {
            messages.splice(index, 1)
          }
        })
        return messages;
      }
    })).subscribe(this.updates$)



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
