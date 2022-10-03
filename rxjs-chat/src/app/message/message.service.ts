import { Injectable } from '@angular/core';
import { filter, Observable, Subject, scan, map, Observer, share, tap } from 'rxjs';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

interface IMessageOperator extends Function {
  (messages: Message[]): Message[]
}
//speciális fv-t definiáltunk így, kiterjeszti a TS fv-ét.


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  newMessage$: Subject<Message> = new Subject<Message>(); // sima S mert csak egyszer kérjük le

  messages$: Observable<Message[]>;

  update$: Subject<IMessageOperator> = new Subject<IMessageOperator>();

  create$: Subject<Message> = new Subject<Message>(); // ez már reaktív

  createMessages$: Subject<Message[]> = new Subject<Message[]>();

  censor$: Subject<string[]> = new Subject<string[]>();

  //feladatok:

  logUpdate$: Observer<any>;

  date$: Subject<Date> = new Subject<Date>();

    numberOfMessages$:  Observable<any>;
  //  numberOfMessages$: Subject<any> = new Subject<any>();

  constructor() {
    this.messages$ = this.update$.pipe(
      tap(() => console.log('call scan')),
      scan((messages: Message[], operation: IMessageOperator) => {
      return operation(messages);
    }, []),
    //  share() // - ha ki akarjuk küszöbölni a duplikátumokat
    ); // - a scan a tömböt viszi magával, az operationt várja
    // induljon ki az update-ből, a scanben az acc egy tömb, a curr egy fv
    //- ezt meghívja a tömbre, és a stream letárolja, h ez az aktuális tömbérték (functional programming)
    this.create$.pipe(map((message: Message) => {
      return (messages: Message[]) => {
        return messages.concat(message);

        //  messages.push(message);
        // return messages;
      }
    }),
    ).subscribe(this.update$);

    this.createMessages$.pipe(map((newMessages: Message[]) => {
      return (messages: Message[]) => messages.concat(newMessages);
    })).subscribe(this.update$);

    // this.createMessages$.pipe(map((messages: Message[]) => {
    //   return (mess: Message[]) => {
    //    messages.forEach(m => mess.push(m));
    //    return mess;
    //   }
    // })).subscribe(this.update$);

    this.censor$.pipe(map(([word1, word2]) => {
      return (messages: Message[]) => {
        messages.map(message => {
          message.text = message.text.replace(word1, word2)});
        return messages;
      }
    })).subscribe(this.update$);

    //feladatok:

    this.update$.subscribe(this.logUpdate$ = {
      next: () => console.log('update történt'),
      error: () => console.log('hiba történt'),
      complete: () => console.log('complete'),
    })

    this.date$.pipe(map((date: Date) => {
      return (messages: Message[]) => {
       messages.map(m => {
         if(m.sentAt < date) {
           m.isRead = true;
       } return m; })
        return messages;
      }
    })).subscribe(this.update$);

    this.numberOfMessages$ = this.messages$.pipe(
      map((m) => m.length),
    );


  }

  addMessage(message: Message) {
    this.newMessage$.next(message); // ebbe a streambe már tudunk berakni értékeket (ez is kihagyható lenne, de ez is egy belépési pont)
  }

  messagesForThreadUser(thread: Thread, user: User) {
    return this.newMessage$.pipe(
      filter((message: Message) => message.thread.id === thread.id
      && message.author.id !== user.id )
    );
  }
  // pl. echo bot - figyeli a threadet és kiszedi azokat az üzeneteket, amelyiket nem ő írta, hogy csak azokra válaszoljon.
  // ezt a fv-t kell az echo botnak meghívnia - így már csak azok az üzenetek mennek át, ami ehhez a userhez és ehhez a thread-hez tartozik
}
