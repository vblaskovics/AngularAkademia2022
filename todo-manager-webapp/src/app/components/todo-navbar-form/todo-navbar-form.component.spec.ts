import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNavbarFormComponent } from './todo-navbar-form.component';

describe('TodoNavbarFormComponent', () => {
  let component: TodoNavbarFormComponent;
  let fixture: ComponentFixture<TodoNavbarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNavbarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoNavbarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
