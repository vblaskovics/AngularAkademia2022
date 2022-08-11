import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTodoItemComponent } from './sub-todo-item.component';

describe('SubTodoItemComponent', () => {
  let component: SubTodoItemComponent;
  let fixture: ComponentFixture<SubTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
