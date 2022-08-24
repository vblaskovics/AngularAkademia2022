// Még hiányzik: validáció -> studentsek száma < max. number of students

import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// function checkMaxStudents(group: AbstractControl): { [s: string]: boolean } {
//   if (group.get('students')? === 3) {
//     return { atMaxStudents: true };
//   }
//   return {};
// }

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css'],
})
export class ClassFormComponent implements OnInit {
  myForm: FormGroup;
  maxStudents: number = 3;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      students: this.fb.array([], []),
    });
  }

  get students(): FormArray {
    return this.myForm.get('students') as FormArray;
  }

  getStudents(student: AbstractControl): FormGroup {
    return student as FormGroup;
  }

  addStudent() {
    const studentFormGroup: FormGroup = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.students.push(studentFormGroup);
    console.log(studentFormGroup);
  }

  deleteStudent(studentIndex: number) {
    this.students.removeAt(studentIndex);
  }

  checkMaxStudents(): boolean {
    if (this.students.length === this.maxStudents) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {}
}
