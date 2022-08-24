import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
  forms: FormGroup;
  exceededTheMax: boolean = false;

  constructor(private fb: FormBuilder) {
    this.forms = this.fb.group({
      students: fb.array([]),
      numberOfStudents: []
    })
   }


   get newStudents(): FormArray{
    return this.forms.get('students') as FormArray
   }

   getStudents(student: AbstractControl): FormGroup{
    return student as FormGroup;
   }

   onChangeMaxNumber(){
    this.newStudents.setValidators(Validators.maxLength(this.forms.get('numberOfStudents')?.value))
    console.log(this.forms.get('numberOfStudents')?.value);

   }
   onSubmit(){
    console.log('form', this.forms);
    console.log(this.newStudents.length);
    console.log(this.exceededTheMax);

   }

   onAddClass(){
    const classesFormGroup: FormGroup = this.fb.group({
      name: [''],
      gender: [''],
      email: ['', Validators.pattern(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/)]
    });
    this.newStudents.push(classesFormGroup)
   }

   deleteClass(deleteIndex: number){

    this.newStudents.removeAt(deleteIndex);
   }

  ngOnInit(): void {
  }

}
