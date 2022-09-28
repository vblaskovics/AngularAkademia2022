// import { AppModule } from './app.module';
import { DisplayBoxComponent } from './components/display-box/display-box.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // You can import everything as Module too
      imports: [HttpClientTestingModule],
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
    component.textToDisplay = 'Test value';
    fixture.detectChanges();
    let textContainer = el.query(By.css('#textContainer'));
    expect(textContainer.nativeElement.textContent).toContain('Test value');
  });
});
