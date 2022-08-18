import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidation2Component } from './form-validation2.component';

describe('FormValidation2Component', () => {
  let component: FormValidation2Component;
  let fixture: ComponentFixture<FormValidation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidation2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
