import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function validateNumberOfStudents(group: AbstractControl): { [s:string]: boolean } {
  const numberOfStudents = group.get('numberOfStudents')?.value
  const students = group.get('students')?.value
  console.log(students.length)
  console.log(numberOfStudents)
  if (numberOfStudents < students.length) {
    console.log('error')
    return {NumberOfStudentsError:true}
  }
  return {};
}

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  classForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.classForm = fb.group({
      className: ['', Validators.required],
      numberOfStudents: [0, Validators.required],
      students: fb.array([])
    }, { validators: [validateNumberOfStudents]})
  }

  get students(): FormArray {
    return this.classForm.get('students') as FormArray;
  }

  get numberOfStudents(): FormControl {
    return this.classForm.get('numberOfStudents') as FormControl
  }

  getStudent(student: AbstractControl): FormGroup {
    return student as FormGroup;
  }

  addStudent(){
    // console.log(this.numberOfStudents.value)
    // console.log(Number(this.students.length))
    // if(this.students.length === Number(this.numberOfStudents.value)) {
    //   return
    // }
    
    const studentFormGroup: FormGroup = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.students.push(studentFormGroup)
  }

  deleteStudent(studentIndex: number) :void {
      this.students.removeAt(studentIndex)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log('form', this.classForm)
    // console.log('form', this.classForm.value)
  }

}
