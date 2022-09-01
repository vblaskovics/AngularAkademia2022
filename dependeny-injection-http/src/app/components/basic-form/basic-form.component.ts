import { UserForm } from './user.form';
import { UserFormModel } from './model/user-form.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/models/user.dto';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {


  // @Output() public onUpdateUser: EventEmitter<void> = new EventEmitter<void>() //sibling komm. miatt

  // public form: FormGroup = new FormGroup<any>({
  //   first_name: new FormControl('', [Validators.required]),
  //   last_name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   gender: new FormControl('', [Validators.required]),
  // }) 
  // formbuilder == formgroup typussosá tevés  - ugyanaz

  public form: FormGroup<UserFormModel> = new UserForm();

  constructor( private httpService: HttpService ) { 
   
   }

  ngOnInit(): void {
  }

  public saveUser(): void {
    const user: UserDto = this.form.value as UserDto //típus kasztolás;

    this.httpService.postUser(user).subscribe({
      next: (user: UserDto) => {
        console.log('user saved with id: ${user.id}');
      },
      error: (err) => {console.log(err)},
      complete: () => {
        this.httpService.usersUpdated.next(true); //subject - lista változássról, küldő fél
        // this.onUpdateUser.emit(); sibling komm. miatt
        this.form.reset();
      },
    });

    

    
  }




  
}
