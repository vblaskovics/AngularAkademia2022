import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      lessons: fb.array([]),
    });
  }

  get lessons(): FormArray {
    return this.form.get('lessons') as FormArray;
  }

  getLesson(lesson: AbstractControl) {
    return lesson as FormGroup;
  }
  addLesson() {
    console.log(this.form);
    const lessonFormGroup: FormGroup = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required],
    });
    this.lessons.push(lessonFormGroup);
  }
  onDeleteLesson(index: number) {
    this.lessons.removeAt(index);
  }
  onSubmit() {
    console.log(this.form);
  }
  ngOnInit(): void {}
}
