import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItem2Component } from './todo-item2.component';

describe('TodoItem2Component', () => {
  let component: TodoItem2Component;
  let fixture: ComponentFixture<TodoItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItem2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
