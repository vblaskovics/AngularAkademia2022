import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList2Component } from './todo-list2.component';

describe('TodoList2Component', () => {
  let component: TodoList2Component;
  let fixture: ComponentFixture<TodoList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoList2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
