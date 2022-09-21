import { User } from '../models/user-model';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-pae.component.html',
  styleUrls: ['./sub-pae.component.css']
})
export class SubPaeComponent implements OnInit {

  user?: User;
  intervalRef: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.refreshUser();
    this.intervalRef = setInterval(() => this.refreshUser(), 3000)
  }

  refreshUser(): void {
    let randomUid = Math.round(Math.random() * 10) + 1;
    
    this.userService.getUser(randomUid).subscribe((u) => {
      this.user = u;
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }
  
  

}
