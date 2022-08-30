import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// function maxNumValidator(group: AbstractControl): {[s:string]: boolean} {
//   const maxNumberofstudents = group.get('maxNumberOfStudents')?.value;
//   const students = group.get('students')?.value;
//   const studentNumber = students.length === 30

//   if ( maxNumberofstudents > studentNumber) {
//     return {errorByMaxNum: true}
//   }
//   return {}
//   // if(maxNumberofstudents > 3)
//   // return {errorByMaxNum: true}
//   // return {}
// }

export const maxLengthArray = (max: number) => {
  return (c: AbstractControl): {[key: string]: any } | null => {
    if (c.value.length <= max)
      return null;

    return { MaxLengthArray: true};
  }
}

export const minLengthArray = (min: number) => {
  return (c: AbstractControl): {[key: string]: any } | null => {
    if (c.value.length >= min)
      return null;

    return { MinLengthArray: true};
  }
}

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      className: ['', Validators.required],
      students: fb.array([], [minLengthArray(1), maxLengthArray(3)]),
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

  get numberOfStudents(): number {
    return this.form.get('students')?.value?.length
  }

  getStudents(students: AbstractControl): FormGroup{
    return students as FormGroup;
  }

  ngOnInit(): void {}

  
  newStudent(){ //addStudent volt korábban
    const studentFormGroup : FormGroup = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['',Validators.required]
    });
    this.students.push(studentFormGroup);

    console.log(studentFormGroup.get('gender')?.hasError);
    
  }

  deleteStudent(studentIndex: number){
    this.students.removeAt(studentIndex);
  }

  addStudent(){

  }



  onSubmit(){
    console.log('Submitted form: ',this.form.value)
  }




  
}
