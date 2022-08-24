import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function validateNumberOfStudents(group: AbstractControl): {
  [s: string]: boolean;
} {
  let studentsLength = (group.get('students') as FormArray).controls.length;
  let maxStudentsLength = group.get('maxNumberOfStudents')?.value;

  if (studentsLength > maxStudentsLength) {
    return { toMuchStudent: true };
  }
  return {};
}
@Component({
  selector: 'app-new-class-form',
  templateUrl: './new-class-form.component.html',
  styleUrls: ['./new-class-form.component.css'],
})
export class NewClassFormComponent implements OnInit {
  newClassForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newClassForm = fb.group(
      {
        className: ['', [Validators.required]],
        maxNumberOfStudents: [1, [Validators.min(0), Validators.required]],
        students: fb.array([]),
      },
      { validators: [validateNumberOfStudents] }
    );
  }
  get className(): FormControl {
    return this.newClassForm.get('className') as FormControl;
  }

  get maxNumberOfStudents(): FormControl {
    return this.newClassForm.get('maxNumberOfStudents') as FormControl;
  }
  get students(): FormArray {
    return this.newClassForm.get('students') as FormArray;
  }
  castToFormGroup(group: AbstractControl) {
    return group as FormGroup;
  }

  onAddStudent() {
    const student = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9.-]*@[a-zA-Z0-9.-]*.[a-z]{2,3}$/),
        ],
      ],
      gender: ['', [Validators.required]],
    });
    this.students.push(student);
  }
  onRemoveStudentAt(index: number) {
    this.students.removeAt(index);
  }
  onSubmit() {
    console.log('form', this.newClassForm);
    if (this.newClassForm.valid) {
      alert('success');
    } else {
      alert('failed');
    }
    this.newClassForm.markAllAsTouched();
  }
  ngOnInit(): void {}
}
