import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoItemComponent } from './edit-todo-item.component';

describe('EditTodoItemComponent', () => {
  let component: EditTodoItemComponent;
  let fixture: ComponentFixture<EditTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
