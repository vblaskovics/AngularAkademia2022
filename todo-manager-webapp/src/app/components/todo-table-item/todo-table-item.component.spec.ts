import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTableItemComponent } from './todo-table-item.component';

describe('TodoTableItemComponent', () => {
  let component: TodoTableItemComponent;
  let fixture: ComponentFixture<TodoTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
