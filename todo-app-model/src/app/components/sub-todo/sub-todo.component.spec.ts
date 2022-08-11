import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTodoComponent } from './sub-todo.component';

describe('SubTodoComponent', () => {
  let component: SubTodoComponent;
  let fixture: ComponentFixture<SubTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
