import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

/* function validateStudentsNumber(array: FormArray): { [s: string]: boolean } {
  console.log('array', array);

  if () {
    return { studentsNumberOverMaximum: true };
  } else {
    return {};
  }
} */

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css'],
})
export class ClassFormComponent implements OnInit {
  classForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.classForm = this.fb.group({
      name: ['', Validators.required],
      number: [0, [Validators.required, Validators.max(30)]],
      students: this.fb.array([]),
    });
    this.students.valueChanges.subscribe(() => {
      if (this.students.length > this.classForm.get('number')?.value) {
        this.classForm.setErrors({'studentsNumberOverMaximum': true})
        console.log('Has error?', this.classForm.hasError('studentsNumberOverMaximum'));

      }
    });
  }

  get students(): FormArray {
    return this.classForm.get('students') as FormArray;
  }

  getStudent(student: AbstractControl): FormGroup {
    return student as FormGroup;
  }

  addStudent() {
    const studentFormGroup: FormGroup = this.fb.group({
      studentName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.students.push(studentFormGroup);
  }

  deleteStudent(studentIndex: number) {
    this.students.removeAt(studentIndex);
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('form', this.classForm);
    console.log('form value', this.classForm.value);
  }
}
