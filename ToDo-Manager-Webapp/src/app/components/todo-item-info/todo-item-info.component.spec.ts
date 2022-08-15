import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemInfoComponent } from './todo-item-info.component';

describe('TodoItemInfoComponent', () => {
  let component: TodoItemInfoComponent;
  let fixture: ComponentFixture<TodoItemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
