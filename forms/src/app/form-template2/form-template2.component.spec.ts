import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplate2Component } from './form-template2.component';

describe('FormTemplate2Component', () => {
  let component: FormTemplate2Component;
  let fixture: ComponentFixture<FormTemplate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplate2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
