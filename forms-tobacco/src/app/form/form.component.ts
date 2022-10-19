import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [
  NgbModule
]

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      birthDate: ['', Validators.required],
      termsConditions: ['', Validators.required],
      checkBox18: [false, Validators.requiredTrue],
      checkBoxTC: [false, Validators.requiredTrue],
      chooseS: [false, Validators.requiredTrue],
      chooseM: [false, Validators.requiredTrue],
      chooseL: [false, Validators.requiredTrue],
      chooseXL: [false, Validators.requiredTrue]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    

  }

  calculateAge(): void {
    let birthOfUser = this.myForm.get('birthDate')?.value;
    console.log(birthOfUser)
  }

}
