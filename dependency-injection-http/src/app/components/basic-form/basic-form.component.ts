import { UserForm } from './user.form';
import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/models/user.dto';
import { UserModel } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';
import { UserFormModel } from './model/user-form.model';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  // public form: FormGroup = new FormGroup<any>({
  //   first_name: new FormControl('', [Validators.required]),
  //   last_name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   gender: new FormControl('', [Validators.required]),
  // });
  // @Output() public userSavedEmitter: EventEmitter<void> = new EventEmitter<void>()

  public form: FormGroup<UserFormModel> = new UserForm();

  constructor(private httpService : HttpService) {
  }

  ngOnInit(): void {}

  public saveUser(): void {
    const user = this.form.value as UserDto;

    this.httpService.postUser(user).subscribe ({
      next: (user: UserDto) => {
        console.log(`user saved with id ${user.id}`)
      },
      error: (err) => {console.log(err)
      },
      complete: () => {
        this.httpService.usersUpdated.next(true),
        // this.userSavedEmitter.emit();
        this.form.reset
      },
    })

 }
}
