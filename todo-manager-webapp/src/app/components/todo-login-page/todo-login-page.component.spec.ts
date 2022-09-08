import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLoginPageComponent } from './todo-login-page.component';

describe('TodoLoginPageComponent', () => {
  let component: TodoLoginPageComponent;
  let fixture: ComponentFixture<TodoLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
