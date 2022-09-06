import { Component, Input, OnInit } from '@angular/core';

import {FormGroup, FormArray, FormBuilder, Validators, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-new-class-form',
  templateUrl: './new-class-form.component.html',
  styleUrls: ['./new-class-form.component.css']
})
export class NewClassFormComponent implements OnInit {
  @Input() max!: number;
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      student: this.fb.array([]),
    });
  }

  get student(): FormArray {
    return this.form.get('student') as FormArray;
  }

  getStudent(student: AbstractControl) {
    return student as FormGroup;
  }

  get numberOfStudents(): number {
    return this.form.get('student')?.value?.length
  }

  addStudent() {
    const studentFormGroup: FormGroup = this.fb.group({
      student: ['',],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.student.push(studentFormGroup);

    console.log(studentFormGroup.get('gender')?.hasError)
  }

  deleteStudent(studentIndex: number) {
    this.student.removeAt(studentIndex);
  }

  onAddStudent() {
    console.log(this.form);
    console.log(this.form.value);

  }

  ngOnInit(): void {
  }

}
