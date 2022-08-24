import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassComponent } from './new-class.component';

describe('NewClassComponent', () => {
  let component: NewClassComponent;
  let fixture: ComponentFixture<NewClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
