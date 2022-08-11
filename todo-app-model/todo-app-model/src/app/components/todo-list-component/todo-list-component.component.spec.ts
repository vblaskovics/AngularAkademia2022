import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponentComponent } from './todo-list-component.component';

describe('TodoListComponent', () => {
  let component: TodoListComponentComponent;
  let fixture: ComponentFixture<TodoListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
