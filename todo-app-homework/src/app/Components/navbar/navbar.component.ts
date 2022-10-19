import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit /* OnDestroy */ {
  @Input() title!: string;
  @Input() counter!: number;
  @Output() emitChange = new EventEmitter<any>();
  @Output() todoPushEmit = new EventEmitter<string>();
  /*   userIsLogedInSub: Subscription;
   */ userIsLogedIn: boolean = false;
  isLogedIn$: Observable<Boolean>;

  // todoAddForm: FormGroup;
  constructor(fb: FormBuilder, public authService: AuthService) {
    this.isLogedIn$ = this.authService.userIsLogedIn;
    /* this.userIsLogedInSub = this.authService.userIsLogedIn.subscribe((x) => {
      this.userIsLogedIn = x;
    }); */
    /*   this.todoAddForm = fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
    }); */
  }
  /*   ngOnDestroy(): void {
    this.userIsLogedInSub.unsubscribe();
  } */
  /*  get titleCont() {
    return this.todoAddForm.get('title');
  } */
  signOut() {
    this.authService.logout();
  }
  ngOnInit(): void {}
  /* handleForm() {
    if (this.todoAddForm.valid) {
      this.todoPushEmit.emit(this.todoAddForm.value.title);
      this.todoAddForm.reset();
    } else {
      this.todoAddForm.markAllAsTouched();
    }

    console.log(this.todoAddForm);
  } */
}
