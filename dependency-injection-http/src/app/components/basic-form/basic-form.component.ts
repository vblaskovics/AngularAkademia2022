import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/models/user.dto';
import { HttpService } from 'src/app/services/http.service';
import { UserFormModel } from './model/user-form.model';
import { UserForm } from './user.form';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  /* @Output() public usersUpdatedEvent: EventEmitter<void> = new EventEmitter<void>(); */
  /* public form: FormGroup = new FormGroup<any>({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  }); */
  public form: FormGroup<UserFormModel> = new UserForm();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  public saveUser(): void {
    const user: UserDto = this.form.value as UserDto;

    this.httpService.postUser(user).subscribe({
      next: (user: UserDto) => {
        console.log(`user saved with id: ${user.id}`);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.httpService.usersUpdated.next(true);
        /* this.usersUpdatedEvent.emit(); */
        this.form.reset();
      },
    });
  }
}
