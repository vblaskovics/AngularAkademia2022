import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder ) { 
    this.form = this.fb.group({
      lessons: this.fb.array([])
    });
  }

  get lessons(): FormArray {
    return this.form.get('lessons') as FormArray;
  }

  getLesson(lesson: AbstractControl): FormGroup{
    return lesson as FormGroup;
  }

  addLesson(){
    const lessonFormGroup : FormGroup = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required]
    });
    this.lessons.push(lessonFormGroup);
  }

  deleteLesson(lessonIndex: number){
    this.lessons.removeAt(lessonIndex);
  }

  onSubmit(){
    console.log('form', this.form.value)
  }

  ngOnInit(): void {
  }

}
