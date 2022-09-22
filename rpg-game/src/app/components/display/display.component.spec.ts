import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DisplayAreaComponent } from '../display-area/display-area.component';
import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayComponent, DisplayAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create the display component', () => {
    expect(component).toBeTruthy();
  });

  it('should render display text', () => {
    component.historyText = 'Test value';
    fixture.detectChanges();
    let textContainer = el.query(By.css('#textContainer'));
    expect(textContainer.nativeElement.textContent).toContain('Test value');
  });
});
