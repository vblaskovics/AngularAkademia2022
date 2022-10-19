import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { AppModule } from 'src/app/app.module';

import { TodoDetailsComponent } from './todo-details.component';

describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;
  let el: any;
  let todoService: TodoServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDetailsComponent ],
      imports: [AppModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement;
    todoService = new TodoServiceService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title of subTodo', () => {
  let selectedTodo = todoService.todos[0];

    fixture.detectChanges();

    expect(el.querySelector('#title').textContent).withContext('subTodo title should be "Title: write a manual"').toBe("Title: write a manual");
  })
});
