import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDto} from "../../models/user.dto";
import {HttpService} from "../../services/http.service";
import { UserFormModel } from './model/user-form.model';
import { UserForm } from './user.form';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

//  @Output() public userSavedEmitter: EventEmitter<void> = new EventEmitter<void>();

  public form: FormGroup<UserFormModel> = new UserForm();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public saveUser(): void {
    const user: UserDto = this.form.value as UserDto;

    this.httpService.postUser(user).subscribe({
      next: (user: UserDto) => {
        console.log(`user saved with id: ${user.id}`);
        
      },
      error: (err) => {console.log(err)},
      complete: () => {
        this.httpService.usersUpdated.next(true);
        // this.userSavedEmitter.emit();
        this.form.reset();
      },
    });
  }

}
