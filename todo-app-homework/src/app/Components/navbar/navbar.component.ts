import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() title!: string;
  @Input() counter!: number;
  @Input() asdTo!: string;
  @Output() emitChange = new EventEmitter<any>();
  @Output() todoPushEmit = new EventEmitter<string>();
  todoAddForm: FormGroup;
  constructor(fb: FormBuilder, public authService: AuthService) {
    this.todoAddForm = fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
    });
  }
  get titleCont() {
    return this.todoAddForm.get('title');
  }
  ngOnInit(): void {}
  handleForm() {
    if (this.todoAddForm.valid) {
      this.todoPushEmit.emit(this.todoAddForm.value.title);
      this.todoAddForm.reset();
    } else {
      this.todoAddForm.markAllAsTouched();
    }

    console.log(this.todoAddForm);
  }
}
