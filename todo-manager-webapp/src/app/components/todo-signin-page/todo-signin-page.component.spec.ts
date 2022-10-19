import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { TodoSigninPageComponent } from './todo-signin-page.component';

describe('TodoSigninPageComponent', () => {
  let component: TodoSigninPageComponent;
  let fixture: ComponentFixture<TodoSigninPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoSigninPageComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoSigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
