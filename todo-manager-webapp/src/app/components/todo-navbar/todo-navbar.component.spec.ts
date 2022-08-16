import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNavbarComponent } from './todo-navbar.component';

describe('TodoNavbarComponent', () => {
  let component: TodoNavbarComponent;
  let fixture: ComponentFixture<TodoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
