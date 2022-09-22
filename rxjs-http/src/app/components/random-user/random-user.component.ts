import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit, OnDestroy {

  randomUser$?: Observable<User>
  timer: any

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getRandomUser()
  }

  getRandomUser() {
    // this.randomUser$ = this.httpService.getRandomUser()
    // this.timer = this.interval()
    
  }

  interval(){
    setInterval(() => this.getRandomUser(), 3000)
  }

  ngOnDestroy(): void {
    clearInterval(this.timer)
  }



}
