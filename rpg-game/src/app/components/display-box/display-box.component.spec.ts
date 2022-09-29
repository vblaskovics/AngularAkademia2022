import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DisplayBoxComponent } from './display-box.component';

describe('DisplayBoxComponent', () => {
  let component: DisplayBoxComponent;
  let fixture: ComponentFixture<DisplayBoxComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayBoxComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be some innerText', () => {
    component.historyDoc = 'test value';

    fixture.detectChanges();
    let textContainer = el.query(By.css('#textContainer'));

    expect(textContainer.nativeElement.textContent).toContain('test value');
  });
});
