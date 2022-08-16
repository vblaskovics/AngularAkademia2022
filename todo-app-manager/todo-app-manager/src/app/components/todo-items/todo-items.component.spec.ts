import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsComponent } from './todo-items.component';

describe('TodoItemsComponent', () => {
  let component: TodoItemsComponent;
  let fixture: ComponentFixture<TodoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
