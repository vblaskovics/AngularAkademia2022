import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSubitemsComponent } from './todo-subitems.component';

describe('TodoSubitemsComponent', () => {
  let component: TodoSubitemsComponent;
  let fixture: ComponentFixture<TodoSubitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSubitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSubitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
