import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomvalidationComponent } from './form-customvalidation.component';

describe('FormCustomvalidationComponent', () => {
  let component: FormCustomvalidationComponent;
  let fixture: ComponentFixture<FormCustomvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCustomvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCustomvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
