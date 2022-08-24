import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

// function validateStudentsNumber(group: AbstractControl): {[s: string]: boolean;} {
//   if(
//     group.get('maxStudents')?.value <
//     group.get(['students'] as const)?.length
//   ) {
//     return {requiredStudentsNumber: true};
//   }
//   return {};
// }

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  classForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.classForm = this.fb.group({
      className: ['', Validators.required],
      maxStudents: ['', Validators.required],
      students: this.fb.array([])
    },
    // { validators: [validateStudentsNumber]}
    );
  }

  ngOnInit(): void {
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
      email: ['', Validators.required]
    });
  this.students.push(studentFormGroup)
  }

  deleteStudent(studentIndex: number) {
    this.students.removeAt(studentIndex);
  }

  onSubmit() {
    console.log('form', this.classForm);

  }

}
