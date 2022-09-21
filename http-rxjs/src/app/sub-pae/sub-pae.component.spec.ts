import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPaeComponent } from './sub-pae.component';

describe('SubPaeComponent', () => {
  let component: SubPaeComponent;
  let fixture: ComponentFixture<SubPaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
