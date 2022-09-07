import { Component, Input } from '@angular/core';
import { UserDto } from './models/user.dto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-injection-http';

  // newUser?: UserDto;

  constructor(){}

  // addNewUser(user: UserDto){
  //   this.newUser = user
  // }
}
