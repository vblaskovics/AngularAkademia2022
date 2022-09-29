/* import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DisplayBoxComponent } from './components/display-box/display-box.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DisplayBoxComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should render display text', () => {
    component.textToDisplay = 'test value';
    fixture.detectChanges();
    let textContainer = el.query(By.css('#textContainer'));
    expect(textContainer.nativeElement.textContent).toContain('test value');
  });
});
 */
