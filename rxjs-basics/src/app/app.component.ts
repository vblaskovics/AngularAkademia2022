import { Component } from '@angular/core';
import { map, Observable, of, tap, share, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-basics';

  constructor(){


    //of observable , mint a HttpClient. paraméterül megadott számokat ad vissza, ez a cold observable - saját magukon belül generálja az adatot. ezt el fogj külden a feliratkozóinak. az of-fal lehet manuálisan tesztelni. miután feliratkoztál, rá lehet pusholni dolgokat. ----  this.learn_01_of();
    
    //observable létrehozása -let obs-new Observable-lel. a subsriber egy objektum, next, complete, error. ugyanugy létrejön. DE a subsribernek meg kell hivni a megfelelő metódusait. ha nem iratkozunk fel rá, akkor nem jön le.
    // ----  this.learn_02_subscriber(); meghivódik az a fg, ami tárolva van

    //feladat settimeouttal

    //feladat - hello World-öt írja ki, aztán zárja le magát

     //HOT observable - data produced outside of observable:
    //COLD observable - data produced inside of observable:

    //subject - alapból multicast - 1szer hvódik meg. 

    // a multicast mindenkinek ugyanazt küldi ki.

    //rxjs-t érdemes concatot használni, hogy ne hozzon étre új tömböt
    

  }

  learn_01_of():void{
    of(1,2,3).subscribe((v: number)=>{
      console.log("of value", v)
    }) 

    of(1,2,3).pipe(map((v)=>(v*2))).subscribe((v)=>{
      console.log("of value * 2", v)
    })

    let obs1: Observable<number> = of(1,2,3).pipe(map((v)=>(v*3)));
    obs1.subscribe((v)=> {
      console.log("obs1 value", v)
    });
  }


  learn_02_subscriber():void{
    let obs = new Observable((subscriber)=>{
      subscriber.next("hellauo");
      subscriber.next("world");
      subscriber.complete();
    });

    obs.subscribe({
      next: (value) => {console.log("Subscriber object", value)}
    })

    obs.subscribe((value)=>{console.log("Subscriber ofunction", value)})
  }


  learn_03_setTimeouttal():void {
    let obsFeladat1 = new Observable((subscriber)=>{
      setTimeout(() => {
        subscriber.next("hello obsFeladat1");
        subscriber.complete(); 
      } , 3000 );
    });

    obsFeladat1.subscribe((value)=>{console.log("hello obsFeladat1", value)})
  }


  learn_04_console_unicast():void {
    let obs3 = new Observable<string>((subscriber)=> {
      //console.log("meg lettem hívva");//mnden subscriberre lefut. p httpCliensnél, amennyiszer subscribeols, annyi http hivás lesz inditva - minden subscriber elinditja a belső folyamatot. a subject ezt kivédi. az observable unique castos- mindig le fog futni.

      subscriber.next("Helloka");
      subscriber.complete();
    }).pipe(tap((v) => console.log("hello tap-es console.log - meg lettem hivva", v)))

    obs3.subscribe((v) => console.log("első sub",v));
    obs3.subscribe((v) => console.log("második sub",v));


  }

  learn_05_console_multicast(): void {
    let obs4 = new Observable<string>((subscriber)=> {
      setTimeout(()=> {
       subscriber.next("Helloka");
       subscriber.complete();
     }, 1);
     }).pipe(
       tap(() => {console.log("hello tap-es console.log - meg lettem hivva")}), // nem hivódik meg kétszer. ha syncron a működés, egymás után jönnek, legutoljára a setTimeout - a fg. hivások miatt, hiába az 1 milisec.
       share()
       )
 
     obs4.subscribe((v) => console.log("első sub",v));
     obs4.subscribe((v) => console.log("második sub",v));
  }

  learn_06_hot():void {
    //HOT observable - data produced outside of observable:
    let random = Math.floor(Math.random() * 10) + 1;
    let obs6 = new Observable<number>((subscriber)=> {
       subscriber.next(random);
       subscriber.complete();
     })

    obs6.subscribe((value)=>{console.log("Subscriber ofunction", value)})

  }


  learn_07_cold():void {
    //COLD observable - data produced inside of observable:
    let obs5 = new Observable<number>((subscriber)=> {
      let random = Math.floor(Math.random() * 10) + 1;
       subscriber.next(random);
       subscriber.complete();
     })

    obs5.subscribe((value)=>{console.log("Subscriber ofunction", value)})
  }

  learn_08_dummy_subject():void {
    let sub1 = new Subject<string>();
    sub1.subscribe((v)=>console.log("Sub 1 data:",v));

    sub1.next("hello sub world");
  }

  learn_09_observable_execution(): void {
    let obs3 = new Observable<string>((subscriber)=> {
      subscriber.next("Helloka");
      subscriber.complete();
    }).pipe(tap((v) => console.log("hello tap-es console.log - meg lettem hivva", v)))

    let sub1 = new Subject<string>();
    
    sub1.subscribe((v)=>console.log("Első sub",v));
    sub1.subscribe((v)=>console.log("Második sub",v));
    obs3.subscribe(sub1);   
                                   //execution a subject a harmadik utasitást nem futtatja le, mert oda mär nem pusholt az observable.
    sub1.subscribe((v)=>console.log("Harmadik sub",v));
    obs3.subscribe((v)=>console.log("Negyedik sub",v));

  }

  learn_10_observable_multicast_execution(): void {
    let obs3 = new Observable<string>((subscriber)=> {
      subscriber.next("Helloka");
      subscriber.complete();
    }).pipe(tap((v) => console.log("hello tap-es console.log - meg lettem hivva", v)),
       share())

    let sub1 = new Subject<string>();
    
    sub1.subscribe((v)=>console.log("Első sub",v));
    sub1.subscribe((v)=>console.log("Második sub",v));
    obs3.subscribe(sub1);   
    sub1.subscribe((v)=>console.log("Harmadik sub",v));
    obs3.subscribe((v)=>console.log("Negyedik sub",v));
  }

}
