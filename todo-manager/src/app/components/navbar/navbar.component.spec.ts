import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a new Todo title', ()=>{
    const titleInput: HTMLInputElement = el.querySelector('#titleInput');


    titleInput.value = 'Test todo text';
    titleInput.dispatchEvent(new Event('input'));


    const form:HTMLFormElement = el.querySelector('#form');
    form.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    //check if todo was created
 

  })
});
