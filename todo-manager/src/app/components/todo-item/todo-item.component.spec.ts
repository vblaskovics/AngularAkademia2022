import { TodoServiceService } from './../../services/todo-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { progress, Todo } from 'src/app/models/todo';
import { AppModule } from 'src/app/app.module';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let el: any;
  let todoService: TodoServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      imports: [AppModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement;
    todoService = new TodoServiceService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display title of subTodo', () => {
    // let todo: Todo = {
    //   id: 5,
    //   title: 'write a manual',
    //   progress: progress.open,
    //   description: 'later',
    //   date: '2022-08-30',
    //   user_id: 91,
    //   subTodoIds: [11],
    // },

    // let subTodo: Todo = {
    //   id: 11,
    //   title: 'write a draft',
    //   progress: progress.open,
    //   description: 'later',
    //   date: '2022-08-20',
    //   user_id: 91,
    // }

    // subTodo.title = 'write a draft'

  //   fixture.detectChanges();

  //   expect(el.querySelector('#subTodo-title').textContent).withContext('subTodo title should be "write a draft"').toBe("write a draft");
  // })
});
