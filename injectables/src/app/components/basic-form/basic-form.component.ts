import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/models/user.dto';
import { HttpService } from 'src/app/services/http.service';
import { UserFormModel } from './model/user-form.model';
import { UserForm } from './user.form';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {



  // myform: FormGroup = new FormGroup<any>({
  //   first_name: new FormControl('', Validators.required),
  //   last_name: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  //   gender: new FormControl('', Validators.required),
  // });

  public myform: FormGroup<UserFormModel> = new UserForm();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  saveUsers(): void {
    const user: UserDTO = this.myform.value as UserDTO;

    this.httpService.postUser(user).subscribe({
      next: (user: UserDTO) => {
        console.log(`User saved with id: ${user.id}`);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.httpService.usersUpdated.next(true);
        this.myform.reset();
      },
    });
  }
}
