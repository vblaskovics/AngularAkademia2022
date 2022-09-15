import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElapsedComponent } from './elapsed.component';

describe('ElapsedComponent', () => {
  let component: ElapsedComponent;
  let fixture: ComponentFixture<ElapsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElapsedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
