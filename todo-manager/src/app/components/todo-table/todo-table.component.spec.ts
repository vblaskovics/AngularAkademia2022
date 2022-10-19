import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { TodoServiceService } from './../../services/todo-service.service';

import { TodoTableComponent } from './todo-table.component';

describe('TodoTableComponent', () => {
  let component: TodoTableComponent;
  let fixture: ComponentFixture<TodoTableComponent>;
  let el: any;
  let todoService: TodoServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTableComponent ],
      imports: [AppModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement;
    todoService = new TodoServiceService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display table', () => {
    let todos = todoService.todos;

    fixture.detectChanges();

    expect(el.querySelector('#title').textContent.trim()).withContext('Todo title should be "write a message"').toBe("write a message");
  });
});
