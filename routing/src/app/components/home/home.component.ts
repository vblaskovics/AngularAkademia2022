import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
