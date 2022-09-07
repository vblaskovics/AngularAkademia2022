import { UserForm } from './user.form';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/models/user.dto';
import { UserModel } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';
import { UserFormModel } from './model/user-form.model';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  users: UserModel[] = []
  // @Output() userAdded: EventEmitter<UserDto> = new EventEmitter<UserDto>()

  // public form: FormGroup = new FormGroup<any>({
  //   first_name: new FormControl('', [Validators.required]),
  //   last_name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   gender: new FormControl('', [Validators.required])
  // })

  public form: FormGroup<UserFormModel> = new UserForm()

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
   
  }

  public saveUser(): void{
    const user: UserDto = this.form.value as UserDto;
    this.httpService.postUser(user).subscribe({
      next: (user: UserDto) => {
        console.log(`user saved with id: ${user.id}`);
      },
      error: () => {},
      complete: () => {
        this.httpService.usersUpdated.next(true)
        // this.userAdded.emit(user)
        this.form.reset()
      },
    })
  }
}
