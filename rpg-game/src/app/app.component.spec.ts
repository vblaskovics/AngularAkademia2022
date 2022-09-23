import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DisplayAreaComponent } from './components/display-area/display-area.component';

describe('App Component', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    //waitForAsync
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DisplayAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent); //egesz
    component = fixture.componentInstance; //component
    el = fixture.debugElement; //dom
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render display text', () => {
    component.displayText = 'Test value';
    fixture.detectChanges();
    let textContainer = el.query(By.css('#textContainer'));

    expect(textContainer.nativeElement.textContent).toContain('Test value');

  });
});
