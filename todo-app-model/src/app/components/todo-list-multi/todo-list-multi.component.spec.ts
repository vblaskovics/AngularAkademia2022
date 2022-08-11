import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListMultiComponent } from './todo-list-multi.component';

describe('TodoListMultiComponent', () => {
  let component: TodoListMultiComponent;
  let fixture: ComponentFixture<TodoListMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListMultiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
