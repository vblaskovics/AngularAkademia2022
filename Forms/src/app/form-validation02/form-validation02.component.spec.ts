import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidation02Component } from './form-validation02.component';

describe('FormValidation02Component', () => {
  let component: FormValidation02Component;
  let fixture: ComponentFixture<FormValidation02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidation02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidation02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
