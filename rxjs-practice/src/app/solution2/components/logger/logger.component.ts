import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, map, filter, tap, Subscription } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  counter2$?: Observable<string>
  asdasd?: string

  clockSubscription?: Subscription

  time: number = 0
  time$: Observable<number> = new Observable()

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    // this.stateService.clock$.subscribe(
    //   sec => {
    //     if(sec % 5 === 0 && sec != 0) {
    //       return console.log(`${sec - 5} -> ${sec}`)
    //     }
    //     return 
    //   }
    // )

    //  this.stateService.clock$.pipe(
    //   filter(sec => {
    //     if(sec % 5 === 0 && sec != 0) {  
    //       return true
    //     }
    //     return false
    //   })
    // ).subscribe((sec) => {
    //   this.asdasd = `${sec - 5} -> ${sec}`
    //   console.log(`${sec - 5} -> ${sec}`)
    // })

    // this.stateService.clock$.subscribe(t => {
    //   this.time = t - t % 5;
    //   if(t % 5 === 0) {
    //     console.log(t === 0 ? `Kezdés` :`Váltás ${t-5} -> ${t}`)
    //   }
    // })

    // 2-ES MEGOLDÁS, EZ IS JÓ MEGOLDÁS!

    // this.clockSubscription = this.stateService.clock$.pipe(
    //   filter(t => t % 5 === 0)
    // ).subscribe((t) =>{
    //   console.log(t === 0 ? `Kezdés` :`Váltás ${t-5} -> ${t}`)
    //   this.time = t
    // })

    this.time$ = this.stateService.clock$.pipe(
      filter(t => t % 5 === 0),
      tap(t => console.log(t === 0 ? `Kezdés` :`Váltás ${t-5} -> ${t}`))
    )


  }

  // 2-es megoldásnál kell alakazni csak az ondestroyt

  // ngOnDestroy(): void {
  //   this.clockSubscription?.unsubscribe()
  // }
}
