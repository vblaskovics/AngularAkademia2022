import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/* function studentsNumberValidator(controls: FormControl): {[n: number]: boolean } {
  if (controls.classes.maxNumStuds){
    return true
  }
} */

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      className: ['', Validators.required],
      maxNumStuds: ['', [
        Validators.required,
        Validators.pattern(/[0-9]/)
      ]],
      students: this.fb.array([])
    });
   }


  get classes(): FormArray {
    return this.form.get('classes') as FormArray;
  }

  get maxNumStuds(): FormControl {
    return this.form.get('maxNumStuds') as FormControl;
  }

  getClasses(className: AbstractControl): FormGroup {
    return className as FormGroup;
  }

  getMaxNumStuds(maxNumStuds: AbstractControl): FormGroup {
    return maxNumStuds as FormGroup;
  }

  deleteClass(classIndex: number) {
    this.classes.removeAt(classIndex)
  }

  get students(): FormArray {
    return this.form.get('students') as FormArray;
  }

  getStudents(student: AbstractControl): FormGroup {
    return student as FormGroup;
  }


  addStudents() {
    const studentsFormGroup: FormGroup = this.fb.group({
      name: [''],
      gender: [''],
      email: ['']
    });
    this.students.push(studentsFormGroup);
  }

  deleteStudent(studentIndex: number) {
    this.students.removeAt(studentIndex);
  }

  ngOnInit(): void {
  }

  onSubmit(/* classIndex: number, studentIndex: number */) {
    if (this.form.value.students.length <= this.form.value.classes.maxNumStuds)
    console.log('form', this.form);
    console.log('value', this.form.value);
    console.log(this.maxNumStuds.errors)
  }

}
