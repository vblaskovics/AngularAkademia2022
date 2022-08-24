import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      lessons: this.fb.array([]),
    });
  }

  get lessons(): FormArray {
    return this.form.get('lessons') as FormArray;
  }

  getLesson(lesson: AbstractControl) {
    return lesson as FormGroup;
  }

  addLesson() {
    const lessonFormGroup: FormGroup = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required],
    });
    this.lessons.push(lessonFormGroup);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  onSubmit() {
    console.log('form', this.form);
    console.log('form', this.form.value);

  }

  ngOnInit(): void {}
}
