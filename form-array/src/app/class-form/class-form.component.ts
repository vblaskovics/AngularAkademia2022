import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      students: this.fb.array([]),
      className: ['', Validators.required],
      maxNumberOfStudents: ['', [Validators.required, Validators.max(30)]]
    });
   }

  get students(): FormArray {
    return this.form.get('students') as FormArray;
  }

  get className(): FormControl{
    return this.form.get('className') as FormControl;
  }

  get maxNumberOfStudents(): FormControl{
    return this.form.get('maxNumberOfStudents') as FormControl;
  }

  getStudents(students: AbstractControl): FormGroup{
    return students as FormGroup;
  }

  ngOnInit(): void {}

  
  addStudent(){
    const studentFormGroup : FormGroup = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.students.push(studentFormGroup);
  }

  deleteStudent(studentIndex: number){
    this.students.removeAt(studentIndex);
  }

  onSubmit(){
    console.log('Submitted form: ',this.form.value)
  }

}
