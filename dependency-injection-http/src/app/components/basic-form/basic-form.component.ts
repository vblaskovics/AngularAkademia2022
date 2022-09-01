import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/models/user.dto';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  public form: FormGroup = new FormGroup<any>({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  })

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public saveUser(): void {
    const user: UserDto = this.form.value as UserDto;

    this.httpService.postUser(user);
  }

}
