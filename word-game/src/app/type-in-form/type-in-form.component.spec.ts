import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInFormComponent } from './type-in-form.component';

describe('TypeInFormComponent', () => {
  let component: TypeInFormComponent;
  let fixture: ComponentFixture<TypeInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeInFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
