import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemMultiComponent } from './todo-item-multi.component';

describe('TodoItemMultiComponent', () => {
  let component: TodoItemMultiComponent;
  let fixture: ComponentFixture<TodoItemMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemMultiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
