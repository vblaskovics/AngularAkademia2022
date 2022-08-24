import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTobaccoComponent } from './form-tobacco.component';

describe('FormTobaccoComponent', () => {
  let component: FormTobaccoComponent;
  let fixture: ComponentFixture<FormTobaccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTobaccoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTobaccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
